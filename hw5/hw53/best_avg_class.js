use school;

db.grades.aggregate(
    [
        { $unwind: "$scores" },
        { $match: { "scores.type": { $in: [ "homework", "exam"] }} },
        { $group: { _id: { class_id: "$class_id", student_id: "$student_id" }, avg: {$avg: "$scores.score" } } },
        { $group: { _id: "$_id.class_id", avg: {$avg: "$avg"} } },
        { $sort: { avg: -1 } },
        { $limit: 1 }
    ]
)