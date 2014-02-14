use cities;

db.zips.aggregate(
    [
        { $match: { $or: [{ "state": "CA"}, {"state": "NY" }] } },
        { $group: { _id: {state: "$state", city: "$city" }, pop: {$sum: "$pop" } } },
        { $match: { pop: { $gt: 25000 } } },
        { $group: { _id: null, pop: { $avg: "$pop" }} }
    ]
)

db.zips.aggregate(
    [
        { $match: { $or: [{ "state": "CA"}, {"state": "NY" }] } },
        { $group: { _id: { city: "$city", state: "$state"}, pop: {$sum: "$pop" } } },
        { $match: { pop: { $gt: 25000 } } },
        { $group: { _id: null, pop: { $avg: "$pop" }} }
    ]
)

db.zips.aggregate(
    [
        { $match: { $or: [{ "state": "CT"}, {"state": "NJ" }] } },
        { $match: { city: "NEWARK" }},
        { $group: { _id: {state: "$state", city: "$city" }, pop: {$sum: "$pop" } } },
        { $match: { pop: { $gt: 25000 } } },
    ]
)

db.zips.aggregate(
    [
        { $match: { $or: [{ "state": "CT"}, {"state": "NJ" }] } },
        { $match: { city: "NEWARK" }},
        { $group: { _id: {city: "$city", state: "$state" }, pop: {$sum: "$pop" } } },
        { $match: { pop: { $gt: 25000 } } },
    ]
)