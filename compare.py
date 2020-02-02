import librosa
from librosa import display
import matplotlib.pyplot as plt
from dtw import dtw
import numpy as np
from itertools import combinations
from statistics import mean

import sounddevice as sd
from scipy.io.wavfile import write

corrArray = []
testCorrArray = []

def dynamicTimeWarping(prompt, userRecording):

    #baseline combos
    baseFiles = list(range(1,6))
    combos = list(combinations(baseFiles,2))

    #test combos
    testCombos = []
    for x in baseFiles:
        testCombos.append([userRecording,x])

    for combo in combos:
        #Load audio files
        y1, sr1 = librosa.load('./audio/' + str(prompt) + '/' + str(combo[0]) + '.wav') 
        y2, sr2 = librosa.load('./audio/' + str(prompt) + '/' + str(combo[1]) + '.wav') 

        mfcc1 = librosa.feature.mfcc(y1,sr1)
        mfcc2 = librosa.feature.mfcc(y2, sr2)

        dist, cost, acc_cost, path = dtw(mfcc1.T, mfcc2.T, dist=lambda x, y: np.linalg.norm(x - y, ord=1))
        corrArray.append(dist) #add normalized distance between two to array

    for test in testCombos:
        #Load audio files
        y1, sr1 = librosa.load(str(userRecording) + '.wav')
        y2, sr2 = librosa.load('./audio/' + str(prompt) + '/' + str(test[1]) + '.wav')

        mfcc1 = librosa.feature.mfcc(y1,sr1)
        mfcc2 = librosa.feature.mfcc(y2, sr2)

        dist, cost, acc_cost, path = dtw(mfcc1.T, mfcc2.T, dist=lambda x, y: np.linalg.norm(x - y, ord=1))
        testCorrArray.append(dist) #add normalized distance between two to array
    return [mean(corrArray), mean(testCorrArray)] #returns means of both arrays



prompt = input("Enter a prompt you want to be tested on (1-3): ")
print("1. The small pup gnawed a hole in the sock.")
print("2. The swan dive was far short of perfect.")
print("3. It snowed, rained, and hailed the same morning.")

fs = 44100  # Sample rate
seconds = 5  # Duration of recording

myrecording = sd.rec(int(seconds * fs), samplerate=fs, channels=1)
print("Start speaking")
sd.wait()  # Wait until recording is finished
print("Stop speaking")
write('output.wav', fs, myrecording)  # Save as WAV file

result = dynamicTimeWarping(prompt, "output")


if ((abs((result[1] - result[0]))/result[0]) > 0.8):
    print("not acceptable")
else:
    print("fine")