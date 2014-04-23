describe('makeRequest: Bitstamp ticker', function(){
    it('should be successful', function(done){
        var requestParams = {
            type: 'GET',
            data: {},
            success: function(data, status){
                console.log("success ", arguments)
                expect(status).to.eql(200)
                done()
            },
            error: function(data, status, error){
            console.log("error ", arguments)
            done()
            },
            timeout: 30000,
            dataType: 'json'
        }

        bitcoin.makeRequest('https://www.bitstamp.net/api/ticker/', requestParams)
    })
})
