import SwiftUI
import RealityKit

struct SnowEmitterView: View {
  var body: some View {
    RealityView { content in
      let particleEntity = ModelEntity()

      var particles = ParticleEmitterComponent.Presets.snow
      particles.emitterShape = .plane
      particles.birthLocation = .surface
      particles.mainEmitter.size = 0.003

      particleEntity.components[ParticleEmitterComponent.self] = particles
      particleEntity.position = SIMD3(x: 0, y: 2.3, z: -2)
      particleEntity.scale *= 3
      particleEntity.transform.scale *= 3
      
      content.add(particleEntity)
    }
  }
}
