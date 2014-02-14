use blog;

db.posts.aggregate(
    [
        { $project: { "comments": 1 }},
        { $unwind: "$comments" },
        { $group: { _id: "$comments.author", 'sum': { $sum: 1} }},
        { $sort: { sum: -1 } },
        { $limit: 3 }
    ]
)

