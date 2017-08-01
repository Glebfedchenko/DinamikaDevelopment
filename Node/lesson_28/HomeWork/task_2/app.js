const fs = require ('fs');

fs.open ('test.txt', 'r', function (err, fd) {
    let buff = Buffer.alloc (6);

    if (err) {
        if (err.code == 'ENOENT') {
            console.log ('File not found: ', err.message);
        } else {
            throw err;
        }
    } else {

        fs.read (fd, buff, 0, 6, 9, function (err, bytes) {

            if (err) throw err;
            console.log ('Read buffer = ', buff.toString ());


            fs.close (fd, function (err) {
                if (err) throw err;
            })
        });
    }
});