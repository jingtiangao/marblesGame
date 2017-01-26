#pragma strict

function OnGUI()
{
	if (GUI.Button(Rect(180,100,60,30), "退出"))
	{
		Application.Quit();
	}
	if (GUI.Button(Rect(280,100,60,30), "重新开始"))
	{
		Application.LoadLevel("scene01");
	}
	if (GUI.Button(Rect(10,160,100,50), "Play"))
	{
		gameObject.GetComponent.<AudioSource>().Play();
	}
	if (GUI.Button(Rect(10,220,100,50), "Pause"))
	{
		gameObject.GetComponent.<AudioSource>().Pause();
	}
	if (GUI.Button(Rect(10,280,100,50), "Stop"))
	{
		gameObject.GetComponent.<AudioSource>().Stop();
	}
}

/* function Start () {
	
}

function Update () {
	
} */
