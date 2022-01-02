describe("Demo on organizing test in cypress",() =>{
    
    before(() =>{
        console.log("lord");
    })
    
    after(() =>{
        console.log("lord dead");
    })

    beforeEach(() =>{
        console.log("sub officer");
    })

    afterEach(() =>{
        console.log("sub officer dead");
    })

    it("test 1",() =>{
        console.log("Test 1");
    })

    it("test 2", () =>{
        console.log("Test 2");
    })
    
    it("test 3", () =>{
        console.log("Test 3");
        
    })

    describe("This is a sub suite", () =>{
        it("sub test 1",() =>{
            console.log("Sub Test 1");
        })
    
        it("sub test 2", () =>{
            console.log("Sub Test 2");
        })
    
        it("sub test 3", () =>{
            console.log("Sub Test 3");
        })
    })
})