import SwiftUI
import React
import React_RCTSwiftExtensions

@main
struct SnowEmitterAppApp: App {
  @UIApplicationDelegateAdaptor var delegate: AppDelegate
  @State private var immersionStyle: ImmersionStyle = .mixed
  
  var body: some Scene {
    RCTMainWindow(moduleName: "SnowEmitterApp")
      .defaultSize(CGSize(width: 500, height: 800))
    ImmersiveSpace(id: "SnowEmitter") {
      SnowEmitterView()
    }
    .immersionStyle(selection: $immersionStyle, in: .mixed, .full)
  }
}
