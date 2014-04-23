describe('makeRequest', function() {
    it('should be able to receive plain text', function(done) {
        var requestParams = {
            type: 'GET',
            success: function(data, status) {
                console.log("success ", arguments);
                expect(status).to.eql(200);
                expect(data).to.eql("Successful");
                done();
            },
        };

        bitcoin.makeRequest('http://hiveapp-makerequest-server.herokuapp.com/test1', requestParams);
    });

    it('should be able to receive JSON data', function(done) {
        var requestParams = {
            type: 'GET',
            success: function(data, status) {
                console.log("success ", arguments);
                expect(status).to.eql(200);
                expect(data).to.eql({'result': 'Successful'});
                done();
            },
        };

        bitcoin.makeRequest('http://hiveapp-makerequest-server.herokuapp.com/test2', requestParams);
    });

    it('should allow forced conversion to JSON data ', function(done) {
        var requestParams = {
            type: 'GET',
            dataType: 'json',
            success: function(data, status) {
                console.log("success ", arguments);
                expect(status).to.eql(200);
                expect(data).to.eql({'result': 'Successful'});
                done();
            },
        };

        bitcoin.makeRequest('http://hiveapp-makerequest-server.herokuapp.com/test3', requestParams);
    });

    it('should fail for 404 urls', function(done) {
        var requestParams = {
            type: 'GET',
            dataType: 'json',
            error: function(data, status, error) {
                console.log("error ", arguments);
                expect(status).to.eql(404);
                done();
            },
        };

        bitcoin.makeRequest('http://hiveapp-makerequest-server.herokuapp.com/notthere', requestParams);
    });
});
