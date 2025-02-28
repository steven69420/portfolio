/*

Officer: 1744180
CaseNum: 702-1-20848712-1744180

Case 702 - The case of Vanishing Vannevar
Stage 2 - Downtown traffic

“All units: Vannevar is heading into the downtown area. Heavy traffic ahead. Drive safely.”
Complete the helper functions below to drive the car and avoid other vehicles. Keep on it kid.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of sleuthCarObject and the cars in
vehicleList to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function Move_Car()
{
	/*
	This function should do the following: 
	 - increment sleuthCarObject's kmsAmnt property by its gasAmount property 
	 - add a random amount between -0.08 and 0.08 to sleuthCarObject's shudderAmt property
	 - use the constrain function to constrain sleuthCarObject's shudderAmt property to values 
	 between 0.06 and 0.81
	 - call the Run_Car_engine function passing sleuthCarObject as an argument
	*/
	var car = sleuthCarObject
	car.kmsAmnt += car.gasAmount
	car.shudderAmt += random(-0.08, 0.08)
	car.shudderAmt = constrain(car.shudderAmt, 0.06, 0.81)
	Run_Car_engine(car)
}


function Cross_Lanes(target_car)
{
	/*
	This function should do the following: 
	 - move target_car from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use lane_positionA and lane_positionB to effect the change.
	 - finally you should return target_car at the end of the function.
	 hint: You will need to modify the posX property of target_car.
	*/
	if(target_car.posX == lane_positionA){
		target_car.posX = lane_positionB
	}
	else{
		target_car.posX = lane_positionA
	}
	return target_car

}


function Check_Infront(target_vehicle)
{
	/*
	This function should do the following: 
	 - determine if target_vehicle is in the same lane and less than 200px behind any of the cars in vehicleList.
	 - do this by traversing vehicleList and comparing each car's kmsAmnt property to that of target_vehicle.
	 - if you find a car that matches these requirements then return the car object. Otherwise return false.
	*/
	for(var i = 0; i < vehicleList.length; i++){
		if((target_vehicle.kmsAmnt < vehicleList[i].kmsAmnt) && (target_vehicle.posY - vehicleList[i].posY) < 200 && target_vehicle.posX == vehicleList[i].posX){
			return vehicleList[i]
		}
	}
	return false 
	
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var sleuthCarObject;

var roadWidth;
var roadLeftEdge;
var lane_positionA;
var lane_positionB;
var carImages = {};

var vehicleList = [
{ posX: 300, posY: 0, kmsAmnt: -200, vehicleType: 'redCar', licencePlate: '4KVW56', gasAmount: 2, exhaust: [  ]} , { posX: 300, posY: 0, kmsAmnt: 200, vehicleType: 'blueCar', licencePlate: 'GP7KD7', gasAmount: 2, exhaust: [  ]} , { posX: 300, posY: 0, kmsAmnt: 600, vehicleType: 'greenCar', licencePlate: '1WOWAU', gasAmount: 2, exhaust: [  ]} , { posX: 300, posY: 0, kmsAmnt: 1000, vehicleType: 'greenCar', licencePlate: '84XWNV', gasAmount: 2, exhaust: [  ]} , { posX: 300, posY: 0, kmsAmnt: 1400, vehicleType: 'greenCar', licencePlate: 'DGH8X0', gasAmount: 2, exhaust: [  ]} , { posX: 300, posY: 0, kmsAmnt: 1800, vehicleType: 'blueCar', licencePlate: 'SXUMML', gasAmount: 2, exhaust: [  ]} , { posX: 300, posY: 0, kmsAmnt: 2200, vehicleType: 'blueCar', licencePlate: '84XF2J', gasAmount: 2, exhaust: [  ]} , { posX: 500, posY: 0, kmsAmnt: 2600, vehicleType: 'greenCar', licencePlate: 'XYIIX0', gasAmount: 2, exhaust: [  ]} , { posX: 300, posY: 0, kmsAmnt: 3000, vehicleType: 'greenCar', licencePlate: 'KMEMJP', gasAmount: 2, exhaust: [  ]} , { posX: 300, posY: 0, kmsAmnt: 3400, vehicleType: 'whiteCar', licencePlate: 'IF26CD', gasAmount: 2, exhaust: [  ]} , { posX: 500, posY: 0, kmsAmnt: 3800, vehicleType: 'blueCar', licencePlate: 'QXSAJ0', gasAmount: 2, exhaust: [  ]} , { posX: 300, posY: 0, kmsAmnt: 4200, vehicleType: 'greenCar', licencePlate: 'EUF58M', gasAmount: 2, exhaust: [  ]} , { posX: 300, posY: 0, kmsAmnt: 4600, vehicleType: 'whiteCar', licencePlate: 'ON2EXP', gasAmount: 2, exhaust: [  ]} , { posX: 500, posY: 0, kmsAmnt: 5000, vehicleType: 'blueCar', licencePlate: '0GC040', gasAmount: 2, exhaust: [  ]} , { posX: 300, posY: 0, kmsAmnt: 5400, vehicleType: 'whiteCar', licencePlate: '5UT55O', gasAmount: 2, exhaust: [  ]} , { posX: 300, posY: 0, kmsAmnt: 5800, vehicleType: 'whiteCar', licencePlate: 'Y96KGA', gasAmount: 2, exhaust: [  ]} , { posX: 500, posY: 0, kmsAmnt: 6200, vehicleType: 'whiteCar', licencePlate: 'JRCUTG', gasAmount: 2, exhaust: [  ]} , { posX: 300, posY: 0, kmsAmnt: 6600, vehicleType: 'whiteCar', licencePlate: 'JDQOYN', gasAmount: 2, exhaust: [  ]} , { posX: 300, posY: 0, kmsAmnt: 7000, vehicleType: 'greenCar', licencePlate: 'CH8PD3', gasAmount: 2, exhaust: [  ]} , { posX: 500, posY: 0, kmsAmnt: 7400, vehicleType: 'blueCar', licencePlate: '6E2SDT', gasAmount: 2, exhaust: [  ]} 
];



function preload()
{
	var carTypes = [
		"detective",
		"redCar",
		"greenCar",
		"blueCar",
		"whiteCar",
	];

	for(var i = 0; i < carTypes.length; i++)
	{
		carImages[carTypes[i]] = loadImage("cars/" + carTypes[i] + ".png");
	}
}

function setup()
{
	createCanvas(800,800);

	roadWidth = 400;
	roadLeftEdge = 200;
	lane_positionA = 300;
	lane_positionB = 500;

	sleuthCarObject = 
	{
		posX: roadLeftEdge + roadWidth/4,
		posY: 550,
		kmsAmnt: 0,
		gasAmount: 3,
		shudderAmt: 0,
		vehicleType: 'detective',
		licencePlate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);



	drawRoad();
	drawCars();

	////////////////////// HANDLE DETECTIVE /////////////////////////


	Move_Car();
	var b2b = Check_Infront( sleuthCarObject );
	if(b2b)Cross_Lanes(sleuthCarObject);


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < vehicleList.length; i++)
	{
		vehicleList[i].kmsAmnt += vehicleList[i].gasAmount;
		vehicleList[i].posY = sleuthCarObject.posY - vehicleList[i].kmsAmnt + sleuthCarObject.kmsAmnt;
	}

}

/////////////////////////DRAWING FUNCTIONS////////////////////////

function drawRoad()
{
	stroke(100);
	fill(50);
	rect(roadLeftEdge,0,roadWidth,800);
	stroke(255);

	for(var i = -1; i < 20; i++)
	{
		line(
		roadLeftEdge + roadWidth/2 , i * 100 + (sleuthCarObject.kmsAmnt%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (sleuthCarObject.kmsAmnt%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(sleuthCarObject);
	image
	(
		carImages["detective"],
		sleuthCarObject.posX - carImages["detective"].width/2 + random(-sleuthCarObject.shudderAmt, sleuthCarObject.shudderAmt),
		sleuthCarObject.posY + random(-sleuthCarObject.shudderAmt, sleuthCarObject.shudderAmt)
	);

	//draw all other cars

	for(var i = 0; i < vehicleList.length; i ++)
	{
		if(vehicleList[i].posY < height && vehicleList[i].posY > -height/2)
		{
			image(
			carImages[vehicleList[i].vehicleType],
			vehicleList[i].posX - carImages[vehicleList[i].vehicleType].width/2,
			vehicleList[i].posY
			);
			Run_Car_engine(vehicleList[i]);

			drawExhaust(vehicleList[i]);
		}
	}

}

function Run_Car_engine(car)
{

	car.exhaust.push({size: 2, x: car.posX, y: car.posY + carImages[car.vehicleType].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.gasAmount/3);
		if(car.vehicleType != "detective")car.exhaust[i].y += (sleuthCarObject.gasAmount - car.gasAmount);
		car.exhaust[i].x += random(-1,1);
		car.exhaust[i].size += 0.5;

		if(car.exhaust[i].y  > height || car.exhaust[i].y < 0)
		{
			car.exhaust.splice(i,1);
		}
	}
}


function drawExhaust(car)
{
		noStroke();
		for(var i = 0; i < car.exhaust.length; i++)
		{
				var alpha = map(car.exhaust[i].size, 0, 40, 50,0);
				fill(125,alpha);
				ellipse(car.exhaust[i].x + 20, car.exhaust[i].y , car.exhaust[i].size);

		}
}
