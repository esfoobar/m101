from pymongo import MongoClient
client = MongoClient()

db = client.school
students = db.students

for student in students.find():

    scores = student['scores']

    low_score_i = None
    low_score = None
    i = 0
    for score in scores:
        if score['type'] == 'homework':
            if low_score_i == None:
                low_score_i = i
                low_score = score['score']
            elif score['score'] < low_score:
                low_score_i = i
                low_score = score['score']
        i = i + 1
        print score

    scores.pop(low_score_i)

    print "new scores:"

    for score in scores:
        print score

    print "\n"

    student['scores'] = scores
    print student

    print "\n---\n"
    students.save(student)