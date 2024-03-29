import { Radio } from './device/radio';
import { Tv } from './device/tv';
import { RemoteControl } from './remote-control/remote-control';
import { RemoteControlWithVolume } from './remote-control/remote-control-with-volume';

function clientCode(
  abstraction: RemoteControl | RemoteControlWithVolume,
): void {
  abstraction.togglePower(); // true

  // type Guard
  if (!('volumeUp' in abstraction)) return;
  abstraction.volumeUp(); // 20
  abstraction.volumeUp(); // 30
  abstraction.volumeDown(); // 20
}

const tv = new Tv();
const radio = new Radio();

// const radioRemoteControl = new RemoteControl(radio);
const radioRemoteControlWithVolume = new RemoteControlWithVolume(radio);
// clientCode(radioRemoteControl);
// clientCode(radioRemoteControlWithVolume);

const tvRemoteControlWithVolume = new RemoteControlWithVolume(tv);

clientCode(tvRemoteControlWithVolume);
