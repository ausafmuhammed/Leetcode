class Solution:
    def pivotArray(self, nums: List[int], pi: int) -> List[int]:
        lft, center, rht = [], [], []
        for n in range(len(nums)):
            print(nums[n])
            if nums[n] < pi :
                lft.append(nums[n])
            elif nums[n] > pi :
                rht.append(nums[n])
            else:
                center.append(nums[n])
    
        return lft + center + rht
