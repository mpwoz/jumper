default:
	(cd src/ && zip -r ../jumper.zip ./*)

clean:
	rm ./jumper.zip
