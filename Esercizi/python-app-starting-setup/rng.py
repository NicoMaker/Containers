from random import randint

min_number = int(input('Please enter the min number: '))
max_number = int(input('Please enter the max number: '))

# Inversione se necessario
if max_number < min_number:
    min_number, max_number = max_number, min_number

# Generazione del numero casuale
rnd_number = randint(min_number, max_number)
print(rnd_number)
