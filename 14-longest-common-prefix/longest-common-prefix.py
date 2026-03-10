class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        strs.sort()
        
        first = strs[0]
        last = strs[-1]
        res = []
        
        # Compare first and last character by character
        for i in range(min(len(first), len(last))):
            if first[i] != last[i]:
                break
            res.append(first[i])
            
        return "".join(res)