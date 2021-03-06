const { succeed, fail, repair, get  } = require('./enhancer.js');
// test away!

describe('enhancer', () => {
    // accepts an item object and returns a new item with the durability restored to 100
    describe('repair', () => {
        it('should restore durability to 100', () => {
            let item = {
                name: 'master sword',
                durability: 27,
                enhancement: 10
            }
            const repairedItem = repair(item)

            expect(repairedItem.durability).toBe(100)
        })
    })
    // accepts an item object and returns a new item object modified according to the rules defined by the client for enhancement success
    describe('succeed', () => {
        it('should increase enhancement by 1', () => {
            let enhancementStat = 10
            let item = {
                name: 'master sword',
                durability: 27,
                enhancement: enhancementStat
            }
            const enhancedItem = succeed(item)
            expect(enhancedItem.enhancement).toBe(enhancementStat + 1)
        })
        it('should have enhancement stay at 20', () => {
            let item = {
                name: 'master sword',
                durability: 27,
                enhancement: 20
            }
            const enhancedItem = succeed(item)
            expect(enhancedItem.enhancement).toBe(20)
        })
    })
    // accepts an item object and returns a new item object modified according to the rules defined by the client for enhancement failure.
    describe('fail', () => {
        it('should decrease durability by 5', () => {
            let durabilityStat = 27
            let item = {
                name: 'master sword',
                durability: durabilityStat,
                enhancement: 14
            }
            const failedItem = fail(item)
            expect(failedItem.durability).toBe(durabilityStat - 5)
        })
        it('should decrease durability by 10 and decrease enchancement by 1', () => {
            let durabilityStat = 27
            let enchancementStat = 17
            let item = {
                name: 'master sword',
                durability: durabilityStat,
                enhancement: enchancementStat
            }
            const failedItem = fail(item)
            expect(failedItem.durability).toBe(durabilityStat - 10)
            expect(failedItem.enhancement).toBe(enchancementStat - 1)
        })
    })
    // object that takes an item and returns a new item with the name property
    describe('get', () => {
        describe('should modify name with enhancement value', () => {
            const itemName = 'master sword'
            const item = {
                name: itemName,
                durability: 90,
                enhancement: 14
            }
            const getItem = get(item)
            expect(getItem.name).toBe(`[+${getItem.enhancement}] ${itemName}`)
        })
        describe('should modify name with enhancement value', () => {
            const itemName = 'master sword'
            const item = {
                name: itemName,
                durability: 90,
                enhancement: 0
            }
            const getItem = get(item)
            expect(getItem.name).toBe(itemName)
        })
    })
});