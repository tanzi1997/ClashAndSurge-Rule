const SurgePaser = (surgeConfig: string) => {
  const lineArray = surgeConfig.split("\n")

  const array = []

  for(const line of lineArray) {
    //空行 pass
    if (line.length === 0) continue;
    //判断用户
    if (/^\[*\]$/.test(line)) {
      const name = line.replace(/(\[ | \])/, '')
    }

  }

  configLine

  const hang = center.split("\n");

  const hanAa = [];

  for (let han of hang) {
    if (han.length !== 0) {
      han = han.replace(" ", "");
      han.indexOf("=");
      if (han.indexOf("=") !== -1) {
        hanAa.push(han.split("="));
      }
    }
  }

  return {};
};

export default SurgePaser;
