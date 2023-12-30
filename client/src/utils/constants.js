import {Threebox} from 'threebox-plugin';

export const backendBaseUrl = "http://localhost:5002";
export const homeLottieJson = "https://lottie.host/771a9262-4718-4960-a831-88b658f49a8d/aI9oDJ3mDA.json";
export const reactMapAccessToken = 'pk.eyJ1IjoiZW1pbmd1eWVuIiwiYSI6ImNrOGI2ZjRyODA1aHEzZG93cmFxaHR5d2IifQ.x8v_uFbdBanYgRtoKCGIOw';
export const onBoardingLottieJson="https://lottie.host/726f2789-b65a-4111-92bd-a736cf6b5a23/6KBD5Xwp2E.json";
export const questionsToAskPatient = ['Are you able to see the screen clearly without loss of vision?',
'Do you feel dizzy, drowsy, or disoriented?',
'Do you feel shortness of breath?',
'Do you experience chest pain?',
'Do you experience pain in one or both eyes?',
'Do you feel little interest or pleasure in doing things?',
'Do you feel down, depressed, or hopeless?',
'Do you have trouble concentrating on things, such as reading this text?',
'Do you constantly feel tired or have little energy?',
'Do you have thoughts of inflicting self-harm?'
];

export const loadLocations = (map, coords) => {
    console.log('load')
    let truck;
  
    map.addLayer({
      id: 'mapmapmap',
      type: 'custom',
      renderingMode: '3d',
      onAdd: function (map, mbxContext) {
  
        window.tb = new Threebox(
          map,
          mbxContext,
          { defaultLights: true }
        );
  
        var options = {
          obj: '/pill/scene.gltf',
          type: 'gltf',
          scale: 20,
          units: 'meters',
          anchor: 'center',
          rotation: { x: 90, y: 180, z: 0 } //default rotation
        }
  
        for (let i = 0; i < coords.length; i ++) {
          console.log(coords);
          const coord = coords[i];
          window.tb.loadObj(options, function (model) {
            console.log('placing');
            truck = model.setCoords([coord.long, coord.lat]);
            window.tb.add(truck);
            let rotation = 0;
            function animate() {
        
              setTimeout( function() {
        
                requestAnimationFrame( animate );
        
              }, 1000 / 20 );
              truck.setRotation({x:0, y:0, z: rotation += 10});
            }
        
            animate();
          })
        }
      },
      render: function (gl, matrix) {
        window.tb.update();
      }
    });
  }