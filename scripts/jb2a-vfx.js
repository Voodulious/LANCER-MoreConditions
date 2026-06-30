// jb2a-vfx.js

export const jb2aVFX = {

  "resistance_heat": {
    apply: async (token) => {
      const effectName = `imc-resist-heat-${token.id}`;

      new Sequence()
        .effect()
        .file("jb2a.energy_strands.in")
        .attachTo(token)
        .scale(0.2)
        .opacity(0.1)
		.playbackRate(0.4)
        .persist()
        .name(effectName)
		.tint(0xffa82e)
        .play();

      console.log("imc: Applied resistance_heat VFX");
    },

    remove: async (token) => {
      const effectName = `imc-resist-heat-${token.id}`;
      Sequencer.EffectManager.endEffects({ name: effectName });
      console.log("imc: Removed resistance_heat VFX");
    }
  },

//resistance_kinetic
  "resistance_kinetic": {
    apply: async (token) => {
      const effectName = `imc-resist-kinetic-${token.id}`;

      new Sequence()
        .effect()
        .file("jb2a.energy_strands.in")
        .attachTo(token)
        .scale(0.2)
        .opacity(0.1)
		.playbackRate(0.4)
        .persist()
        .name(effectName)
		.tint(0x6b6565)
        .play();

      console.log("imc: Applied resistance_kinetic VFX");
    },

    remove: async (token) => {
      const effectName = `imc-resist-kinetic-${token.id}`;
      Sequencer.EffectManager.endEffects({ name: effectName });
      console.log("imc: Removed resistance_kinetic VFX");
    }
  },
  
  //resistance_burn
  "resistance_burn": {
    apply: async (token) => {
      const effectName = `imc-resist-burn-${token.id}`;

      new Sequence()
        .effect()
        .file("jb2a.energy_strands.in")
        .attachTo(token)
        .scale(0.2)
        .opacity(0.1)
		.playbackRate(0.4)
        .persist()
        .name(effectName)
		.tint(0xff2a00)
        .play();

      console.log("imc: Applied resistance_burn VFX");
    },

    remove: async (token) => {
      const effectName = `imc-resist-burn-${token.id}`;
      Sequencer.EffectManager.endEffects({ name: effectName });
      console.log("imc: Removed resistance_burn VFX");
    }
  },
  
   //resistance_energy
  "resistance_energy": {
    apply: async (token) => {
      const effectName = `imc-resist-energy-${token.id}`;

      new Sequence()
        .effect()
        .file("jb2a.energy_strands.in")
        .attachTo(token)
        .scale(0.2)
        .opacity(0.1)
		.playbackRate(0.4)
        .persist()
        .name(effectName)
		.tint(0x00b7ff)
        .play();

      console.log("imc: Applied resistance_energy VFX");
    },

    remove: async (token) => {
      const effectName = `imc-resist-energy-${token.id}`;
      Sequencer.EffectManager.endEffects({ name: effectName });
      console.log("imc: Removed resistance_energy VFX");
    }
  },
  
     //resistance_explosive
  "resistance_explosive": {
    apply: async (token) => {
      const effectName = `imc-resist-explosive-${token.id}`;

      new Sequence()
        .effect()
        .file("jb2a.energy_strands.in")
        .attachTo(token)
        .scale(0.2)
        .opacity(0.1)
		.playbackRate(0.4)
        .persist()
        .name(effectName)
		.tint(0x00b7ff)
        .play();

      console.log("imc: Applied resistance_explosive VFX");
    },

    remove: async (token) => {
      const effectName = `imc-resist-explosive-${token.id}`;
      Sequencer.EffectManager.endEffects({ name: effectName });
      console.log("imc: Removed resistance_explosive VFX");
    }
  },
  
   //downandout
  "downandout": {
    apply: async (token) => {
      const effectName = `imc-downandout-${token.id}`;

      new Sequence()
        .effect()
        .file("jb2a.sleep.symbol.pink")
        .attachTo(token)
        .scale(0.6)
        .opacity(0.8)
		.playbackRate(0.8)
        .persist()
        .name(effectName)
		.tint(0x6f90ab)
        .play();

      console.log("imc: Applied downandout VFX");
    },

    remove: async (token) => {
      const effectName = `imc-downandout-${token.id}`;
      Sequencer.EffectManager.endEffects({ name: effectName });
      console.log("imc: Removed downandout VFX");
    }
  },

  
   //immobilized
  "immobilized": {
    apply: async (token) => {
      const effectName = `imc-immobilized-${token.id}`;
	  
		const tokenSize = token.w; //token diameter in pixels
		
		const animationSize = 200; //jb2a size of animation
		
		const scale = tokenSize / animationSize;
		
		const adjustScale = scale * 1.2;
		
      new Sequence()
        .effect()
        .file("jb2a.markers.chain.spectral_standard.loop")
        .attachTo(token)
		.belowTokens()
        .scale(adjustScale)
        .opacity(0.5)
		.playbackRate(0.6)
        .persist()
        .name(effectName)
		.tint(0xe3e3e3)
        .play();

      console.log("imc: Applied immobilized VFX");
    },

    remove: async (token) => {
      const effectName = `imc-immobilized-${token.id}`;
      Sequencer.EffectManager.endEffects({ name: effectName });
      console.log("imc: Removed immobilized VFX");
    }
  },


   //shutdown
  "shutdown": {
    apply: async (token) => {
      const effectName = `imc-shutdown-${token.id}`;

      new Sequence()
        .effect()
        .file("jb2a.smoke.plumes_loop")
        .attachTo(token)
        .scale(0.4)
        .opacity(0.8)
		.playbackRate(0.8)
        .persist()
        .name(effectName)
        .play();

      console.log("imc: Applied shutdown VFX");
    },

    remove: async (token) => {
      const effectName = `imc-shutdown-${token.id}`;
      Sequencer.EffectManager.endEffects({ name: effectName });
      console.log("imc: Removed shutdown VFX");
	  
	    }
  },
  
//lockon
"lockon": {
  apply: async (token) => {
    const effectName = `imc-lockon-${token.id}`;
	
		const tokenSize = token.w; //token diameter in pixels
		
		const animationSize = 200; //jb2a size of animation
		
		const scale = tokenSize / animationSize;
		
		const adjustScale = scale * 0.8;

    new Sequence()
      .effect()
        .file("modules/lancer-moreconditions/icons/lockon-rotate/*.png") // ← two versions
        .attachTo(token)
		.belowTokens()
        .scale(adjustScale)
        .opacity(0.4)
        .tint(0x6b0000)
        .playbackRate(1)       // adjust speed
        .persist()
        .name(effectName)
      .play();

    console.log("imc: Applied lockon VFX");
  },

  remove: async (token) => {
    const effectName = `imc-lockon-${token.id}`;
    Sequencer.EffectManager.endEffects({ name: effectName });
    console.log("imc: Removed lockon VFX");
  }
},
  
  //slow
"slow": {
  apply: async (token) => {
    const effectName = `imc-slow-${token.id}`;
	
		const tokenSize = token.w; //token diameter in pixels
		
		const animationSize = 200; //jb2a size of animation
		
		const scale = tokenSize / animationSize;
		
		const adjustScale = scale * 0.9;
		
    new Sequence()
      .effect()
        .file("jb2a.extras.tmfx.inpulse.circle.02.normal")
        .attachTo(token)
		.belowTokens()
        .scale(adjustScale)
        .opacity(1)
        .tint(0xffffff)
        .playbackRate(0.6)       // adjust speed
        .persist()
        .name(effectName)
      .play();

    console.log("imc: Applied slow VFX");
  },

  remove: async (token) => {
    const effectName = `imc-slow-${token.id}`;
    Sequencer.EffectManager.endEffects({ name: effectName });
    console.log("imc: Removed slow VFX");
  }
},
  
    //stunned
"stunned": {
  apply: async (token) => {
    const effectName = `imc-stunned-${token.id}`;
	
		const tokenSize = token.w; //token diameter in pixels
		
		const animationSize = 200; //jb2a size of animation
		
		const scale = tokenSize / animationSize;
		
		const adjustScale = scale * 1;
		
    new Sequence()
      .effect()
        .file("jb2a.particles.swirl.greenyellow.02.01")
        .attachTo(token)
        .scale(adjustScale)
        .opacity(0.8)
        .tint(0xffffff)
        .playbackRate(0.6)       // adjust speed
        .persist()
        .name(effectName)
      .play();

    console.log("imc: Applied stunned VFX");
  },

  remove: async (token) => {
    const effectName = `imc-stunned-${token.id}`;
    Sequencer.EffectManager.endEffects({ name: effectName });
    console.log("imc: Removed stunned VFX");
  }
},


    //NANO REPAIR CLOUD
"imc-nano-repair-cloud": {
  apply: async (token) => {
    const effectName = `imc-nano-repair-cloud-${token.id}`;
	
		const tokenSize = token.w; //token diameter in pixels
		
		const animationSize = 200; //jb2a size of animation
		
		const scale = tokenSize / animationSize;
		
		const adjustScale = scale * 2;
		
    new Sequence()
      .effect()
        .file("jb2a.extras.tmfx.inflow.circle.01")
        .attachTo(token)
		.belowTokens()
        .scale(adjustScale)
        .opacity(0.4)
        .tint(0xffffff)
        .playbackRate(0.6)       // adjust speed
        .persist()
        .name(effectName)
      .play();

    console.log("imc: Applied imc-nano-repair-cloud VFX");
  },

  remove: async (token) => {
    const effectName = `imc-nano-repair-cloud-${token.id}`;
    Sequencer.EffectManager.endEffects({ name: effectName });
    console.log("imc: Removed imc-nano-repair-cloud VFX");
  }
},


    //CRUSHED TARGETING
"imc-crush-targeting": {
  apply: async (token) => {
    const effectName = `imc-crush-targeting-${token.id}`;
	
		const tokenSize = token.w; //token diameter in pixels
		
		const animationSize = 200; //jb2a size of animation
		
		const scale = tokenSize / animationSize;
		
		const adjustScale = scale * 0.7;
		
    new Sequence()
      .effect()
        .file("jb2a.soundwave.02.blue")
        .attachTo(token)
		.belowTokens()
        .scale(adjustScale)
        .opacity(0.6)
        .tint(0xffffff)
        .playbackRate(0.6)       // adjust speed
        .persist()
        .name(effectName)
      .play();

    console.log("imc: Applied imc-crush-targeting VFX");
  },

  remove: async (token) => {
    const effectName = `imc-crush-targeting-${token.id}`;
    Sequencer.EffectManager.endEffects({ name: effectName });
    console.log("imc: Removed imc-crush-targeting VFX");
  }
},

    //REBOUND SCAN
"imc-rebound-scan": {
  apply: async (token) => {
    const effectName = `imc-rebound-scan-${token.id}`;
	
		const tokenSize = token.w; //token diameter in pixels
		
		const animationSize = 200; //jb2a size of animation
		
		const scale = tokenSize / animationSize;
		
		const adjustScale = scale * 0.6;
		
    new Sequence()
      .effect()
        .file("jb2a.zoning.outward.circle.loop.bluegreen.01.02")
        .attachTo(token)
		.belowTokens()
        .scale(adjustScale)
        .opacity(0.5)
        .tint(0xffffff)
        .playbackRate(0.4)       // adjust speed
        .persist()
        .name(effectName)
      .play();

    console.log("imc: Applied imc-rebound-scan VFX");
  },

  remove: async (token) => {
    const effectName = `imc-rebound-scan-${token.id}`;
    Sequencer.EffectManager.endEffects({ name: effectName });
    console.log("imc: Removed imc-rebound-scan VFX");
  }
},



    //BLIND
"imc-blind": {
  apply: async (token) => {
    const effectName = `imc-blind-${token.id}`;
	
		const tokenSize = token.w; //token diameter in pixels
		
		const animationSize = 200; //jb2a size of animation
		
		const scale = tokenSize / animationSize;
		
		const adjustScale = scale * 0.3;
		
		const upDark = tokenSize * 0.1;
		
    new Sequence()
      .effect()
        .file("jb2a.darkness.black")
        .attachTo(token)
		.atLocation({ x: token.center.x, y: token.center.y - upDark })
        .scale(adjustScale)
        .opacity(0.9)
        .tint(0xffffff)
        .playbackRate(0.6)       // adjust speed
        .persist()
        .name(effectName)
      .play();

    console.log("imc: Applied imc-blind VFX");
  },

  remove: async (token) => {
    const effectName = `imc-blind-${token.id}`;
    Sequencer.EffectManager.endEffects({ name: effectName });
    console.log("imc: Removed imc-blind VFX");
  }
},

  // Add more JB2A effects here
};