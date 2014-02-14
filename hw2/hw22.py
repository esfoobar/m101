from pymongo import MongoClient
client = MongoClient()

db = client.students
grades = db.grades

current_student_id = None
student_grades = []

for grade in grades.find({'type': 'homework'}):

    student_id = grade['student_id']

    if current_student_id == None:
        current_student_id = student_id

    if student_id != current_student_id:
        print student_grades

        grades.remove({'type': 'homework', 'student_id': current_student_id, 'score': sorted(student_grades)[0]})
        print "deleting:", sorted(student_grades)[0]

        student_grades = []
        current_student_id = student_id
    
    student_grades.append(grade['score'])