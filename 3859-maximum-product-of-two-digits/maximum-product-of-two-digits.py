class Solution:
    def maxProduct(self, n: int) -> int:
        o = sorted(str(n))
        return int(o[-1]) * int(o[-2])