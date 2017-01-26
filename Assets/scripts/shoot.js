#pragma strict

function Start () {
	
}

var speed:int = 5;
var newobject:Transform;
var numOfShoot:int = 0;
var numOfDestroy:int = 0;

function Update () {
    var x:float = Input.GetAxis("Horizontal")*Time.deltaTime*speed;
    var z:float = Input.GetAxis("Vertical")*Time.deltaTime*speed;
    transform.Translate(x, 0, z);
    //print("walk.js:"+x);
	
	//跳跃
/* 	if (Input.GetKey(KeyCode.Space))
	{
		var up:Vector3 = transform.TransformDirection(Vector3.up);
		gameObject.GetComponent.<Rigidbody>().AddForce(up*20);
	} */
	
	if (Input.GetButtonDown("Fire1"))
	{
		gameObject.GetComponent.<AudioSource>().Play();
		var n:Transform = Instantiate(newobject, transform.position, transform.rotation);
		var fwd:Vector3 = transform.TransformDirection(Vector3.forward);
		n.GetComponent.<Rigidbody>().AddForce(fwd*2000);
		numOfShoot++;
		gameObject.Find("Canvas/countText").GetComponent(UI.Text).text="射击数："+numOfShoot+"  消灭数："+numOfDestroy;
	}
	print("消灭数："+numOfDestroy);
}
