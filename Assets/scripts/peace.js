#pragma strict

//碰撞检测函数
function OnCollisionEnter()
{
	gameObject.Find("Canvas/countText").GetComponent(UI.Text).text = "You Lose！";
	gameObject.Find("Point light").GetComponent(Light).enabled = false;
	Destroy(gameObject);
	gameObject.Find("Main Camera").GetComponent(walk).enabled = false;
	gameObject.Find("player").GetComponent(shoot).enabled = false;
	gameObject.Find("Cylinder").GetComponent(shoot).enabled = false;
	gameObject.Find("ground").GetComponent(restart).enabled = true;
}