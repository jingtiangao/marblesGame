#pragma strict

function OnGUI()
{
	if (GUI.Button(Rect(320, 400, 60, 30), "开始游戏"))
	{
		Application.LoadLevel("scene01");
	}	
	
	if (GUI.Button(Rect(420, 400, 60, 30), "退 出"))
	{
		Application.Quit();
	}

}