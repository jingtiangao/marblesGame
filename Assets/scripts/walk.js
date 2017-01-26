#pragma strict

function Start () {
	
}

var speed:int = 5;
var newobject:Transform;

function Update () {
    var x:float = Input.GetAxis("Horizontal")*Time.deltaTime*speed;
    var z:float = Input.GetAxis("Vertical")*Time.deltaTime*speed;
    transform.Translate(x, 0, z);
    //print("walk.js:"+x);
	
	//镜头旋转
	if (Input.GetKey(KeyCode.Q))
	{
		transform.Rotate(0, -25*Time.deltaTime, 0, Space.Self);
	}
	if (Input.GetKey(KeyCode.E))
	{
		transform.Rotate(0, 25*Time.deltaTime, 0, Space.Self);
	}
	
	//跳跃
/* 	if (Input.GetKey(KeyCode.Space))
	{
		var up:Vector3 = transform.TransformDirection(Vector3.up);
		GetComponent.<Rigidbody>().AddForce(up*20);
	} */
	
/* 	if (Input.GetButtonDown("Fire1"))
	{
		var n:Transform = Instantiate(newobject, transform.position, transform.rotation);
		var fwd:Vector3 = transform.TransformDirection(Vector3.forward);
		n.GetComponent.<Rigidbody>().AddForce(fwd*2000);
	} */
}
