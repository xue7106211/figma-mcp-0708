import Image from "next/image";
import { PhoneVerificationDialog } from "../components/ui/phone-verification-dialog";

const img = "http://localhost:3845/assets/82151df4530421f4ecff4d2ccaa248db123805da.svg";
const img1 = "http://localhost:3845/assets/6b486fc1a1ce5592fc7d9910ed57ebcdc8d05172.svg";
const img2 = "http://localhost:3845/assets/32b4f5929ce3a1ad1380f0cd76ad4ef8a083fc19.svg";
const img3 = "http://localhost:3845/assets/9392aa9a5415e2d1191c3602a5246de27c0b254b.svg";
const img4 = "http://localhost:3845/assets/36c42c5486a11386b2445ab2ff6d757cdf933ca0.svg";

export default function Home() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-8 items-center justify-center min-h-screen p-0 relative"
      data-name="Main Container"
      id="node-1247_37011"
    >
      <div
        className="box-border content-stretch flex flex-col gap-6 items-center justify-start p-0 relative shrink-0"
        data-name="Header Container"
        id="node-1247_37012"
      >
        <div
          className="box-border content-stretch flex flex-col gap-1.5 items-center justify-center leading-[0] not-italic p-0 relative shrink-0 text-nowrap"
          data-name="Title Container"
          id="node-1247_37013"
        >
          <div
            className="font-['PingFang_SC:Medium',_sans-serif] relative shrink-0 text-[#080807] text-[30px] text-right tracking-[1.2px]"
            id="node-1247_37014"
          >
            <p className="adjustLetterSpacing block leading-[normal] text-nowrap whitespace-pre">
              声音克隆，开启AI语音时代
            </p>
          </div>
          <div
            className="font-['PingFang_SC:Regular',_sans-serif] relative shrink-0 text-[#b0b4ba] text-[14px] text-left"
            id="node-1247_37015"
          >
            <p className="block leading-[normal] text-nowrap whitespace-pre">
              精准复刻，真实自然——让AI替你发声
            </p>
          </div>
        </div>
        <div
          className="bg-[rgba(191,196,217,0.2)] box-border content-stretch flex flex-row items-center justify-start p-[2px] relative rounded-lg shrink-0 w-[180px]"
          data-name="Component 54"
          id="node-1247_37018"
        >
          <div
            className="basis-0 bg-[#ffffff] grow h-8 min-h-px min-w-px relative rounded-md shrink-0"
            data-name="Component 53"
            id="node-I1247_37018-8020_61902"
          >
            <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
              <div className="box-border content-stretch flex flex-row gap-2.5 h-8 items-center justify-center px-2 py-[9px] relative w-full">
                <div
                  className="font-['PingFang_SC:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#242529] text-[14px] text-center text-nowrap"
                  id="node-I1247_37018-8020_61902-8020_61885"
                >
                  <p className="block leading-[14px] whitespace-pre">
                    声音克隆
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="basis-0 grow h-8 min-h-px min-w-px relative rounded-md shrink-0"
            data-name="Component 53"
            id="node-I1247_37018-8020_61903"
          >
            <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
              <div className="box-border content-stretch flex flex-row gap-2.5 h-8 items-center justify-center px-2 py-[9px] relative w-full">
                <div
                  className="font-['PingFang_SC:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#5a5c66] text-[14px] text-center text-nowrap"
                  id="node-I1247_37018-8020_61903-8020_61883"
                >
                  <p className="block leading-[14px] whitespace-pre">
                    声音管理
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute h-6 left-2.5 top-0.5 w-[47px]"
            id="node-I1247_37018-8020_61904"
          >
            <img alt="" className="block max-w-none size-full" src={img} />
          </div>
        </div>
      </div>
      <div
        className="box-border content-stretch flex flex-col gap-6 items-center justify-center p-0 relative shrink-0 w-[718px]"
        data-name="Content Container"
        id="node-1247_37019"
      >
        <div
          className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full"
          data-name="Instruction Container"
          id="node-1247_37020"
        >
          <div
            className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
            data-name="Instruction Row"
            id="node-1247_37021"
          >
            <div
              className="basis-0 font-['PingFang_SC:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-[rgba(8,8,7,0.9)] text-left"
              id="node-1247_37022"
            >
              <p className="block leading-[12px]">请朗读以下例句录制音频</p>
            </div>
            <div
              className="box-border content-stretch flex flex-row gap-1 h-[18px] items-center justify-start p-[4px] relative rounded shrink-0"
              data-name="Change Prompt Container"
              id="node-1247_37023"
            >
              <div
                className="relative shrink-0 size-4"
                data-name="Change Icon"
                id="node-1247_37024"
              >
                <div
                  className="absolute h-[6.029px] left-px top-[2.5px] w-[12.607px]"
                  id="node-I1247_37024-566_73"
                >
                  <div className="absolute bottom-[-8.294%] left-[-3.966%] right-0 top-[-9.952%]">
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={img1}
                    />
                  </div>
                </div>
                <div className="absolute flex h-[6.029px] items-center justify-center left-[2.393px] top-[7.471px] w-[12.607px]">
                  <div className="flex-none rotate-[180deg]">
                    <div
                      className="h-[6.029px] relative w-[12.607px]"
                      id="node-I1247_37024-566_88"
                    >
                      <div className="absolute bottom-[-8.294%] left-[-3.966%] right-0 top-[-9.952%]">
                        <img
                          alt=""
                          className="block max-w-none size-full"
                          src={img2}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="font-['PingFang_SC:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(8,8,7,0.6)] text-center text-nowrap"
                id="node-1247_37025"
              >
                <p className="block leading-[18px] whitespace-pre">换一个</p>
              </div>
            </div>
          </div>
          <div
            className="bg-[#f6f8fa] h-[70px] relative rounded-lg shrink-0 w-full"
            data-name="Example Sentence Container"
            id="node-1247_37026"
          >
            <div className="flex flex-col justify-center relative size-full">
              <div className="box-border content-stretch flex flex-col gap-2.5 h-[70px] items-start justify-center p-[16px] relative w-full">
                <div
                  className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full"
                  data-name="Example Sentence Row"
                  id="node-1247_37027"
                >
                  <div
                    className="font-['PingFang_SC:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[18px] text-left text-nowrap"
                    id="node-1247_37028"
                  >
                    <p className="block leading-[18px] whitespace-pre">
                      无论何种心情，只要有人懂，就是最好的安慰。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-[#ffffff] h-[220px] relative rounded-2xl shrink-0 w-full"
          data-name="Upload Container"
          id="node-1247_37029"
        >
          <div className="absolute border-[#00b2ff] border-[1.5px] border-solid inset-0 pointer-events-none rounded-2xl shadow-[0px_0px_0px_0px_rgba(0,0,0,0.25)]" />
          <div className="flex flex-col items-center justify-center relative size-full">
            <div className="box-border content-stretch flex flex-col gap-2 h-[220px] items-center justify-center p-[16px] relative w-full">
              <div
                className="box-border content-stretch flex flex-col gap-3 items-center justify-center px-0 py-10 relative shrink-0"
                data-name="Upload Section"
                id="node-1247_37030"
              >
                <div
                  className="bg-[#407bf5] box-border content-stretch flex flex-row gap-1 h-10 items-center justify-center px-4 py-[5px] relative rounded-lg shadow-[0px_0px_0px_0px_rgba(0,0,0,0.25)] shrink-0"
                  data-name="Button 按钮"
                  id="node-1247_37031"
                >
                  <div
                    className="overflow-clip relative shrink-0 size-4"
                    data-name="AigcSystemRecording"
                    id="node-I1247_37031-5_765"
                  >
                    <div
                      className="absolute bg-[#ffffff] h-[10.5px] left-[4.5px] rounded-[100px] top-[1.5px] w-[7px]"
                      id="node-I1247_37031-5_765-775_22"
                    />
                    <div
                      className="absolute h-[7.2px] left-[1.9px] top-[7.4px] w-[12.2px]"
                      data-name="Vector 233 (Stroke)"
                      id="node-I1247_37031-5_765-775_24"
                    >
                      <img
                        alt=""
                        className="block max-w-none size-full"
                        src={img3}
                      />
                    </div>
                  </div>
                  <div
                    className="font-['PingFang_SC:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap"
                    id="node-I1247_37031-5_766"
                  >
                    <p className="block leading-[22px] whitespace-pre">
                      开始录音
                    </p>
                  </div>
                </div>
                <div
                  className="font-['PingFang_SC:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#407bf5] text-[14px] text-center text-nowrap"
                  id="node-1247_37032"
                >
                  <p className="leading-[normal] whitespace-pre">
                    <span className="text-[#407bf5]">上传</span>
                    <span className="text-[#407bf5]">音频</span>
                    <span className="text-[rgba(8,8,7,0.6)]">{` 支持格式wav/mp3，时长3-15s，建议20-30字`}</span>
                  </p>
                </div>
              </div>
              <div
                className="h-px shrink-0 w-full"
                data-name="Divider"
                id="node-1247_37033"
              />
            </div>
          </div>
        </div>
        <div
          className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
          data-name="Action Row"
          id="node-1247_37034"
        >
          <div
            className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
            data-name="Checbox"
            id="node-1247_37035"
          >
            <div
              className="bg-[#ffffff] relative rounded shrink-0 size-4"
              data-name="Normal"
              id="node-I1247_37035-1003_1949"
            >
              <div className="absolute border border-[#e1e1ef] border-solid inset-0 pointer-events-none rounded" />
            </div>
            <div
              className="flex flex-col font-['PingFang_SC:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-[rgba(8,8,7,0.6)] text-left text-nowrap"
              id="node-I1247_37035-1003_1948"
            >
              <p className="leading-[22px] text-[#080807] text-[14px] whitespace-pre">
                <span>我已阅读并同意</span>
                <span className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] font-['PingFang_SC:Regular',_sans-serif] not-italic">
                  《度加引擎声音复刻协议》
                </span>
              </p>
            </div>
          </div>
          <div
            className="bg-[rgba(0,0,0,0.04)] box-border content-stretch flex flex-row gap-1 h-10 items-center justify-center px-4 py-[5px] relative rounded-lg shrink-0"
            data-name="Button 按钮"
            id="node-1247_37036"
          >
            <div
              className="box-border content-stretch flex flex-row gap-[12.5px] items-center justify-center p-0 relative rounded-[5px] shrink-0"
              data-name="AigcSystem AI"
              id="node-I1247_37036-5_765"
            >
              <div
                className="relative shrink-0 size-4"
                data-name="素材库"
                id="node-I1247_37036-5_765-340_22"
              >
                <div
                  className="absolute contents inset-0"
                  id="node-I1247_37036-5_765-340_28"
                >
                  <div
                    className="absolute inset-0 overflow-clip"
                    id="node-I1247_37036-5_765-340_29"
                  >
                    <div
                      className="absolute contents left-[0.125px] top-[0.125px]"
                      id="node-I1247_37036-5_765-340_30"
                    >
                      <div
                        className="absolute left-[0.125px] size-[15.75px] top-[0.125px]"
                        data-name="Union"
                        id="node-I1247_37036-5_765-340_31"
                      >
                        <div
                          className="absolute bottom-[1.796%] left-[3.517%] right-[1.758%] top-[1.796%]"
                          style={{
                            "--fill-0":
                              "rgba(8.000000473111868, 8.000000473111868, 7.000000057742, 1)",
                          } as React.CSSProperties}
                        >
                          <img
                            alt=""
                            className="block max-w-none size-full"
                            src={img4}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="font-['PingFang_SC:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(8,8,7,0.4)] text-left text-nowrap"
              id="node-I1247_37036-5_766"
            >
              <p className="block leading-[22px] whitespace-pre">开始克隆</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
