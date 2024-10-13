extends TextureButton

var score = 0

func _pressed():
	score = score + 1
	$AudioStreamPlayer2D.play()
	pass 


func _process(_delta):
	$Label.text = str(score)
	pass

