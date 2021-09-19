//https://leetcode.com/problems/count-items-matching-a-rule/

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    const keys = ['type', 'color', 'name']
    const newItems = items.filter((item) => {
        if(item[keys.findIndex(key => key === ruleKey)] === ruleValue){
            return item
        }
    })
    return newItems.length
};