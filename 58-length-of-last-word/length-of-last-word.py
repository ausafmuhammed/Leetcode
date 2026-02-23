class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        n = s.split(" ")
        x = [v for v in n if v]
        return len(x[-1])
