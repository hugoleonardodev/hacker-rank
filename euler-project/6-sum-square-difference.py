n = ([2, 3, 10])
t = int(n[0])
r = int(1)
for e in range(1, len(n), 1):
    soma = int(0)
    somaQ = int(0)
    for c in range(1, n[e]+1, r):
        soma = int(soma + int(format(c)))
    for d in range(1, n[e]+1, r):
        somaQ = int(somaQ + int(format(d))**2)
    print((soma**2) - somaQ)