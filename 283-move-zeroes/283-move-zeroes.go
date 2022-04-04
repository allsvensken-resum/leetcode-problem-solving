func moveZeroes(nums []int)  {
    notZero := []int{}
    for idx, val := range nums {
        if val != 0 {
            notZero = append(notZero, idx)
        }
    }
    
    currNumber := 0
    for currNumber < len(nums) {
        if currNumber < len(notZero) {
            nums[currNumber] = nums[notZero[currNumber]]
            currNumber += 1
            continue
        }
        
        nums[currNumber] = 0
        currNumber += 1
    }
}