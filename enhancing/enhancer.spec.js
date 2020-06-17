const { succeed, fail, repair,  } = require('./enhancer.js');
// test away!

describe('enhancer', () => {
    describe('repair', () => {
        it('reapir should be able to restore durability to 100', () => {
            let item = {
                name: 'master sword',
                durability: 27,
                enhancement: 10
            }
            const repairedItem = repair(item);

            expect(repairedItem.durability).toBe(100);
        });
    });

    describe('succeed', () => {
        it('successful enchacemnet should increase by 1', () => {
            const enhancementStats = 10
            const item = {
                name: 'master sword',
                durability: 27,
                enhancement: enhancementStats
            }
            const enhancedItem = succeed(item);
            expect(enhancedItem.enhancement).toBe(enhancementStats + 1);
        });
        it('should have enhancement stay at 20', () => {
            const item = {
                name: 'master sword',
                durability: 27,
                enchacemnet: 20
            }
            const enhancedItem = succeed(item);
            expect(enhancedItem.enchacemnet).toBe(20);
        });
    });

    describe('fail', () => {
        it('durability when failed will decrease by 5', () => {
            const durabilityStats = 27
            const item = {
                name: 'master sword',
                durability: durabilityStats, 
                enhancement: 14
            }
            const failedItem = fail(item)
            expect(failedItem.durability).toBe(durabilityStats - 5);
        });
        it('should decrease the durability by 10 and decrease enhancement by 1', () => {
            const durabilityStats = 27 
            const enhancementStats = 17 
            const item = {
                name: 'master sword',
                durability: durabilityStats, 
                enhancement: enhancementStats
            }
            const failedItem = fail(item)
            expect(failedItem.durability).toBe(durabilityStats - 10)
            expect(failedItem.enhancement).toBe(enhancementStats - 1);
        });
    });
    // describe('get', () => {
    //     describe('')
    // })
});