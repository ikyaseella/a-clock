 <!-- <div class="arrow">v</div> -->

 /* 
.hour-1{
  top:40px;
  right: 130px;
}

.hour-2{
  top: 30px;
  right: 60px;
}

.hour-3{
  top: 70px;
  right: 30px;
}
.hour-4{
  top:90px ;
}

.hour-6{
  top: 140px;
  right: 10px;
}
.hour-12{
  top: 5px;
  left: 135px;
} */

.minute-hand .arrow{
  color: var(--light-black);
  font-size: 30px;
  font-weight: bold;
  transform: rotate(180deg);
  position: absolute;
  top: -40px;
  left: 92px;

}

<!-- <div class="minute-hand-container">
          <div class="minute-hand">
             <div class="hand"></div>
          </div>
			</div>
			<div class="hour-hand-container">
				<div class="hour-hand">
					<div class="hand"></div>
				</div>
			</div> -->

      .minute-hand-container{
  
  width: 200px;
  height: 200px;
  position: absolute;
  top: 50px;
  left: 50px;
  border-radius: 50%;
}

.minute-hand{
  position: relative;
}

.minute-hand .hand{
  width: 4px;
  height:120px;
  background-color: var(--light-black);
  position: absolute;
  top: -20px;
  left: 98px;
}



.hour-hand-container{
  /* background-color: #069c54; */
  width: 200px;
  height: 200px;
  position: absolute;
  top: 50px;
  left: 50px;
  border-radius: 50%;
}

.hour-hand{
  position: relative;
}

.hour-hand.hand{
  width: 4px;
  height:120px;
  background-color: var(--light-green);
  position: absolute;
  top: 100px;
  left: 50px;
}


/* .dot{
  background-color: #8c8c8c;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    top: 140px;
    left: 140px;
} */


circumference:hover{
  content: "";
  position: absolute;
  height: 300px;
  width: 300px;
  border-radius: 50%;
  z-index: -1;
  border: 10px solid;
  background: conic-gradient(red #006aff, #ff0095);
  
  
}
