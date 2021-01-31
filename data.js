var APP_DATA = {
  "scenes": [
    {
      "id": "0-gate_01",
      "name": "Gate_01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.03087890215067013,
          "pitch": -0.003722062976619256,
          "rotation": 0,
          "target": "1-frontwindow_02"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.4978675337406937,
          "pitch": -0.05483353179635486,
          "title": "Enjoy the view!",
          "text": "Welcome...Please make your way to the House"
        }
      ]
    },
    {
      "id": "1-frontwindow_02",
      "name": "FrontWindow_02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.201234424807538,
          "pitch": 0.04218882417524661,
          "rotation": 0,
          "target": "2-frontdoor_03"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.09053248348334719,
          "pitch": 0.06917673684060688,
          "title": "Front Window",
          "text": "Use the Door!"
        }
      ]
    },
    {
      "id": "2-frontdoor_03",
      "name": "FrontDoor_03",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4042396023636954,
          "pitch": -0.0522777705181916,
          "rotation": 0,
          "target": "3-pourch_06"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.03354001938244089,
          "pitch": -0.00006654966638741655,
          "title": "Ring The Bell",
          "text": "Come on In and wipe your feet"
        }
      ]
    },
    {
      "id": "3-pourch_06",
      "name": "Pourch_06",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.792983891212055,
          "pitch": -0.09411866028897542,
          "rotation": 0,
          "target": "1-frontwindow_02"
        },
        {
          "yaw": 0.5510920690544907,
          "pitch": -0.12047748263051972,
          "rotation": 0,
          "target": "4-hallway_04"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.023806551127551,
          "pitch": -0.06571498857534408,
          "title": "Exit",
          "text": "Leaving so Soon??"
        },
        {
          "yaw": -0.0026987867839469715,
          "pitch": 0.0707663248766508,
          "title": "Front Door",
          "text": "No Need to knock come on in!"
        }
      ]
    },
    {
      "id": "4-hallway_04",
      "name": "hallway_04",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.998800166987916,
          "pitch": 0.09184737757011163,
          "rotation": 0,
          "target": "3-pourch_06"
        },
        {
          "yaw": -1.403411454241132,
          "pitch": -0.1037033108040184,
          "rotation": 0,
          "target": "5-kitchen_05"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.425355136949058,
          "pitch": 0.08068118864025386,
          "title": "Enter the Kitchen",
          "text": "<span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\">Fridge and cellar are full! Help Yourself!</span>"
        }
      ]
    },
    {
      "id": "5-kitchen_05",
      "name": "Kitchen_05",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2344856879839554,
          "pitch": -0.13498970449915149,
          "rotation": 0,
          "target": "4-hallway_04"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.9578158961903398,
          "pitch": 0.0997456363753848,
          "title": "The Kitchen",
          "text": "Help Yourself!"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
