db.users.insertMany([
{"username":"prlama1","name":"Padma Raj1","city":"Lalitpur"},
{"username":"prlama2","name":"Padma Raj2","city":"Kathmandu"},
{"username":"prlama3","name":"Padma Raj3","city":"Bhaktapur"},
{"username":"prlama4","name":"Padma Raj4","city":"Kathmandu"},
{"username":"prlama5","name":"Padma Raj5","city":"Bhaktapur"},
{"username":"prlama6","name":"Padma Raj6","city":"Kathmandu"}
])

// aggregationPipeline
db.users.find({city:'Kathmandu'})=> select \* from users where city='Kathmandu'
db.users.find({city:'Kathmandu'},{username:1,city:1})=> select username,city from users where city='Kathmandu'
