#pragma strict

function Start () {
	
}

// var numOfShoot:int;
// var numOfDestroy:int;
var flag:int = 0;

function Update () 
{
	if (gameObject.transform.position.y < 0 && flag == 0)
	{
		flag = 1;
		gameObject.Find("player").GetComponent(shoot).numOfDestroy++;
		/* numOfShoot = gameObject.Find("player").GetComponent(shoot).numOfShoot;
		numOfDestroy = ++(gameObject.Find("player").GetComponent(shoot).numOfDestroy);
		gameObject.Find("Canvas/countText").GetComponent(UI.Text).text = "射击数："+numOfShoot+"  消灭数："+numOfDestroy; */
	}
	
	//判断是否全部消灭
	if (gameObject.Find("player").GetComponent(shoot).numOfDestroy >= 12)
	{
		gameObject.Find("Canvas/countText").GetComponent(UI.Text).text = "恭喜通关！";
		gameObject.Find("Main Camera").GetComponent(walk).enabled = false;
		gameObject.Find("player").GetComponent(shoot).enabled = false;
		gameObject.Find("Cylinder").GetComponent(shoot).enabled = false;
		gameObject.Find("ground").GetComponent(restart).enabled = true;
		Destroy(gameObject);
	}
	
	
}
