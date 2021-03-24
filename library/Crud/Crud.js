module.exports = {
    getData: (data, cb) => {
        data.find({}, (err, results) => {
            if (err)
            {
                throw err;
            } else {
                cb(results);
            }
        });
    },
    postData: (data, request, cb) => {
        let newData = new data(request.body);
        newData.save()
            .then((data) => {
                cb(data);
            })
            .catch((err) => {
                throw err;
            });
    },
    getSingleData: (data, request, cb) => {
        data.findById(request.params.id, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    putData: (data, request, cb) => {
        data.findById(request.params.id, (err, result) => {
            if (err) throw err;
            result = request.body;
            result.save()
                  .then((updatedData) => {
                      cb(updatedData);
                  })
                  .catch((error) => {
                      throw error;
                  });
        });
    },
    deleteData: (data, request, cb) => {
        data.remove({
            _id: request.params.id
        }, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    }
}