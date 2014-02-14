use enron;

db.messages.find({"headers.From": "andrew.fastow@enron.com", "headers.To": {$in: ["john.lavorato@enron.com"] }}).count();

db.messages.find({"headers.From": "andrew.fastow@enron.com", "headers.To": {$in: ["jeff.skilling@enron.com"] }}).count();