from pymongo import MongoClient
client = MongoClient()

db = client.photosharing
albums = db.albums
images = db.images

for image in images.find({}):

    album = albums.find_one({"images": image['_id'] })

    if album:
        print "image " + str(image["_id"]) + " found in album: " + str(album["_id"])
    else:
        print "image " + str(image["_id"]) + " not found in any album"
        images.remove({"_id": image["_id"]})