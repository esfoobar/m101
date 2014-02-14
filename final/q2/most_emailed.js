use enron;

db.messages.aggregate([

    {$unwind: "$headers.To"},
    {$group: {
        _id: {_id: "$_id", from: "$headers.From"},
        to: { $addToSet: "$headers.To" },
    }},
    {$unwind: "$to"},
    {$group: {
        _id: { from: "$_id.from", to: "$to" },
        count: { $sum: 1 },
    }},
    {$sort: {count: -1}},
    {$limit: 3}

])

db.messages.find({"headers.From": "susan.mara@enron.com", "headers.To": "jeff.dasovich@enron.com"}, {"headers.To":1, "headers.From":1, _id: 0}).count()
db.messages.find({"headers.From": "susan.mara@enron.com", "headers.To": "richard.shapiro@enron.com"}, {"headers.To":1, "headers.From":1, _id: 0}).count()
db.messages.find({"headers.From": "soblander@carrfut.com", "headers.To": "soblander@carrfut.com"}, {"headers.To":1, "headers.From":1, _id: 0}).count()
db.messages.find({"headers.From": "susan.mara@enron.com", "headers.To": "james.steffes@enron.com"}, {"headers.To":1, "headers.From":1, _id: 0}).count()
db.messages.find({"headers.From": "evelyn.metoyer@enron.com", "headers.To": "kate.symes@enron.com"}, {"headers.To":1, "headers.From":1, _id: 0}).count()
db.messages.find({"headers.From": "susan.mara@enron.com", "headers.To": "alan.comnes@enron.com"}, {"headers.To":1, "headers.From":1, _id: 0}).count()
