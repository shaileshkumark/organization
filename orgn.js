const express = require('express');
const app = express();
const connection = require('./connection');

app.use(express.json());
let sql2 = `select * from Employee`;
app.use(express.json());
app.get('/orgn', (req, res) => {

    connection.query(sql2,
        (err, row) => {
            if (!err) {
                let node = (row, id = null) =>

                    row
                        .filter(emp => emp['manager_id'] == id)
                        .map(emp => ({ ...emp, assignees: node(row, emp.emp_id) }));


                res.json(node(row));
            }
            else
                res.status(400).json(err);
        });
});
app.listen(6000, '0.0.0.0', function () {
    console.log('Listening to port:  ' + 6000);

});


