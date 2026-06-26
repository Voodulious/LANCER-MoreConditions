// jb2a-vfx.js

export const jb2aVFX = {

  "resistance_heat": {
    apply: async (token) => {
      const effectName = `lmc-resist-heat-${token.id}`;

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

      console.log("LMC: Applied resistance_heat VFX");
    },

    remove: async (token) => {
      const effectName = `lmc-resist-heat-${token.id}`;
      Sequencer.EffectManager.endEffects({ name: effectName });
      console.log("LMC: Removed resistance_heat VFX");
    }
  },

//resistance_kinetic
  "resistance_kinetic": {
    apply: async (token) => {
      const effectName = `lmc-resist-kinetic-${token.id}`;

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

      console.log("LMC: Applied resistance_kinetic VFX");
    },

    remove: async (token) => {
      const effectName = `lmc-resist-kinetic-${token.id}`;
      Sequencer.EffectManager.endEffects({ name: effectName });
      console.log("LMC: Removed resistance_kinetic VFX");
    }
  },
  
  //resistance_burn
  "resistance_burn": {
    apply: async (token) => {
      const effectName = `lmc-resist-burn-${token.id}`;

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

      console.log("LMC: Applied resistance_burn VFX");
    },

    remove: async (token) => {
      const effectName = `lmc-resist-burn-${token.id}`;
      Sequencer.EffectManager.endEffects({ name: effectName });
      console.log("LMC: Removed resistance_burn VFX");
    }
  },
  
   //resistance_energy
  "resistance_energy": {
    apply: async (token) => {
      const effectName = `lmc-resist-energy-${token.id}`;

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

      console.log("LMC: Applied resistance_energy VFX");
    },

    remove: async (token) => {
      const effectName = `lmc-resist-energy-${token.id}`;
      Sequencer.EffectManager.endEffects({ name: effectName });
      console.log("LMC: Removed resistance_energy VFX");
    }
  },
  
     //resistance_explosive
  "resistance_explosive": {
    apply: async (token) => {
      const effectName = `lmc-resist-explosive-${token.id}`;

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

      console.log("LMC: Applied resistance_explosive VFX");
    },

    remove: async (token) => {
      const effectName = `lmc-resist-explosive-${token.id}`;
      Sequencer.EffectManager.endEffects({ name: effectName });
      console.log("LMC: Removed resistance_explosive VFX");
    }
  },
  
   //downandout
  "downandout": {
    apply: async (token) => {
      const effectName = `lmc-downandout-${token.id}`;

      new Sequence()
        .effect()
        .file("jb2a.sleep.symbol.pink")
        .attachTo(token)
        .scale(0.4)
        .opacity(0.8)
		.playbackRate(0.8)
        .persist()
        .name(effectName)
		.tint(0x6f90ab)
        .play();

      console.log("LMC: Applied downandout VFX");
    },

    remove: async (token) => {
      const effectName = `lmc-downandout-${token.id}`;
      Sequencer.EffectManager.endEffects({ name: effectName });
      console.log("LMC: Removed downandout VFX");
    }
  },

  
   //immobilized
  "immobilized": {
    apply: async (token) => {
      const effectName = `lmc-immobilized-${token.id}`;
	  
		const tokenSize = token.w; //token diameter in pixels
		
		const animationSize = 200; //jb2a size of animation
		
		const scale = tokenSize / animationSize;
		
      new Sequence()
        .effect()
        .file("jb2a.markers.chain.spectral_standard.loop")
        .attachTo(token)
        .scale(scale)
        .opacity(0.7)
		.playbackRate(0.6)
        .persist()
        .name(effectName)
		.tint(0x4a4a4a)
        .play();

      console.log("LMC: Applied immobilized VFX");
    },

    remove: async (token) => {
      const effectName = `lmc-immobilized-${token.id}`;
      Sequencer.EffectManager.endEffects({ name: effectName });
      console.log("LMC: Removed immobilized VFX");
    }
  },


   //shutdown
  "shutdown": {
    apply: async (token) => {
      const effectName = `lmc-shutdown-${token.id}`;

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

      console.log("LMC: Applied shutdown VFX");
    },

    remove: async (token) => {
      const effectName = `lmc-shutdown-${token.id}`;
      Sequencer.EffectManager.endEffects({ name: effectName });
      console.log("LMC: Removed shutdown VFX");
	  
	    }
  },
  
//lockon
"lockon": {
  apply: async (token) => {
    const effectName = `lmc-lockon-${token.id}`;

    new Sequence()
      .effect()
        .file("modules/lancer-moreconditions/icons/lockon-rotate/*.png") // ← two versions
        .attachTo(token)
		.belowTokens()
        .scale(0.3)
        .opacity(0.5)
        .tint(0x6b0000)
        .playbackRate(1)       // adjust speed
        .persist()
        .name(effectName)
      .play();

    console.log("LMC: Applied lockon VFX");
  },

  remove: async (token) => {
    const effectName = `lmc-lockon-${token.id}`;
    Sequencer.EffectManager.endEffects({ name: effectName });
    console.log("LMC: Removed lockon VFX");
  }
},
  
  //slow
"slow": {
  apply: async (token) => {
    const effectName = `lmc-slow-${token.id}`;
	
		const tokenSize = token.w; //token diameter in pixels
		
		const animationSize = 200; //jb2a size of animation
		
		const scale = tokenSize / animationSize;
		
		const adjustScale = scale * 0.5;
		
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

    console.log("LMC: Applied slow VFX");
  },

  remove: async (token) => {
    const effectName = `lmc-slow-${token.id}`;
    Sequencer.EffectManager.endEffects({ name: effectName });
    console.log("LMC: Removed slow VFX");
  }
},
  
    //stunned
"stunned": {
  apply: async (token) => {
    const effectName = `lmc-stunned-${token.id}`;
	
		const tokenSize = token.w; //token diameter in pixels
		
		const animationSize = 200; //jb2a size of animation
		
		const scale = tokenSize / animationSize;
		
		const adjustScale = scale * 0.8;
		
    new Sequence()
      .effect()
        .file("jb2a.particles.swirl.greenyellow.02.01")
        .attachTo(token)
		.belowTokens()
        .scale(adjustScale)
        .opacity(0.7)
        .tint(0xffffff)
        .playbackRate(0.6)       // adjust speed
        .persist()
        .name(effectName)
      .play();

    console.log("LMC: Applied stunned VFX");
  },

  remove: async (token) => {
    const effectName = `lmc-stunned-${token.id}`;
    Sequencer.EffectManager.endEffects({ name: effectName });
    console.log("LMC: Removed stunned VFX");
  }
},


    //NANO REPAIR CLOUD
"imc-nano-repair-cloud": {
  apply: async (token) => {
    const effectName = `lmc-imc-nano-repair-cloud-${token.id}`;
	
		const tokenSize = token.w; //token diameter in pixels
		
		const animationSize = 200; //jb2a size of animation
		
		const scale = tokenSize / animationSize;
		
		const adjustScale = scale * 0.8;
		
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

    console.log("LMC: Applied imc-nano-repair-cloud VFX");
  },

  remove: async (token) => {
    const effectName = `lmc-imc-nano-repair-cloud-${token.id}`;
    Sequencer.EffectManager.endEffects({ name: effectName });
    console.log("LMC: Removed imc-nano-repair-cloud VFX");
  }
},
  // Add more JB2A effects here
};
