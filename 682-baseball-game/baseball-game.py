class Solution:
    def calPoints(self, ops: List[str]) -> int:
        score = []
    
        for n in ops:
            if n == '+':
                score.append(score[-2] +score[-1])
            elif n == 'C':
                score.pop()
            elif n == 'D':
                score.append(score[-1] * 2)
            else:
                score.append(int(n))
    
        return sum(score)
        