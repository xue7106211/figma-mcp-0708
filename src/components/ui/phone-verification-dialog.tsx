import React from "react";
const img = "http://localhost:3845/assets/88b080f6326444cd82a85af0f1d473059171b233.svg";

/**
 * 电话验证码对话框组件
 */
export function PhoneVerificationDialog() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col items-end justify-start p-0 relative rounded-lg shadow-[0px_6px_12px_0px_rgba(191,196,217,0.3)] w-[440px] max-w-full"
      data-name="数据录入对话框"
      id="node-9707_62287"
    >
      <div
        className="bg-[#ffffff] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full"
        data-name="Container"
        id="node-9707_62288"
      >
        <div className="relative w-full h-full">
          <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start pb-4 pt-6 px-6 relative w-full">
            <div
              className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
              data-name="Header"
              id="node-9707_62289"
            >
              <div
                className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
                data-name="Title Container"
                id="node-9707_62290"
              >
                <div
                  className="font-['PingFang_SC:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#242529] text-[16px] text-left text-nowrap"
                  id="node-9707_62291"
                >
                  <p className="block leading-[16px] whitespace-pre">电话验证码</p>
                </div>
              </div>
              <div
                className="overflow-clip relative shrink-0 size-4"
                data-name="Close Button"
                id="node-9707_62292"
              >
                <div className="absolute flex h-[11.303px] items-center justify-center left-[2.343px] top-[2.343px] w-[11.303px]">
                  <div className="flex-none rotate-[225deg]">
                    <div className="bg-[#5a5c66] h-[1.333px] rounded-[200px] w-[14.667px]" />
                  </div>
                </div>
                <div className="absolute flex h-[11.303px] items-center justify-center left-[2.343px] top-[2.343px] w-[11.303px]">
                  <div className="flex-none rotate-[315deg]">
                    <div className="bg-[#5a5c66] h-[1.333px] rounded-[200px] w-[14.667px]" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="font-['PingFang_SC:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#9296a6] text-[12px] text-left w-full"
              id="node-9707_62293"
            >
              <p className="block leading-[12px]">这里是富文本描述，可以支持超链接内容</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative shrink-0 w-full"
        data-name="Input Container"
        id="node-9707_62294"
      >
        <div className="relative w-full h-full">
          <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start pb-3 pt-2 px-6 relative w-full">
            <div
              className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0 w-full"
              data-name="Input Field"
              id="node-9707_62295"
            >
              <div
                className="box-border content-stretch flex flex-row gap-6 items-center justify-start p-0 relative shrink-0"
                id="node-I9707_62295-3256_50275"
              >
                <div
                  className="font-['PingFang_SC:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap"
                  id="node-I9707_62295-3256_50276"
                >
                  <p className="block leading-[22px] whitespace-pre">手机号</p>
                </div>
                <div
                  className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"
                  id="node-I9707_62295-3256_50277"
                >
                  <div className="flex flex-col font-['Baidu_Number:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#242529] text-[24px] text-left text-nowrap">
                    <p className="block leading-[24px] whitespace-pre">123</p>
                  </div>
                  <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                    <div className="[grid-area:1_/_1] ml-0 mt-0 relative rounded-lg size-10">
                      <div className="absolute border border-[#d5d6d9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
                    </div>
                  </div>
                  <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                    <div className="[grid-area:1_/_1] ml-0 mt-0 relative rounded-lg size-10">
                      <div className="overflow-clip relative size-full">
                        <div className="absolute flex flex-col font-['Baidu_Number:Medium',_sans-serif] justify-center leading-[0] left-[13px] not-italic text-[#000000] text-[24px] text-left text-nowrap top-5 -translate-y-1/2">
                          <p className="block leading-[24px] whitespace-pre">7</p>
                        </div>
                      </div>
                      <div className="absolute border border-[#d5d6d9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
                    </div>
                  </div>
                  <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                    <div className="[grid-area:1_/_1] ml-0 mt-0 relative rounded-lg size-10">
                      <div className="absolute border border-[#d5d6d9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
                    </div>
                    <div className="[grid-area:1_/_1] flex flex-col font-['Baidu_Number:Medium',_sans-serif] justify-center ml-[13px] mt-5 not-italic relative text-[#000000] text-[24px] text-left text-nowrap -translate-y-1/2">
                      <p className="block leading-[24px] whitespace-pre">9</p>
                    </div>
                  </div>
                  <div className="relative shrink-0 size-10">
                    <div className="absolute inset-[-1.25%]">
                      <img alt="" className="block max-w-none size-full" src={img} />
                    </div>
                  </div>
                  <div className="flex flex-col font-['Baidu_Number:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#242529] text-[24px] text-left text-nowrap">
                    <p className="block leading-[24px] whitespace-pre">2489</p>
                  </div>
                  <div className="absolute flex flex-col font-['Baidu_Number:Medium',_sans-serif] justify-center leading-[0] left-[61px] not-italic text-[#000000] text-[24px] text-left text-nowrap top-5 -translate-y-1/2">
                    <p className="block leading-[24px] whitespace-pre">3</p>
                  </div>
                </div>
              </div>
              <div
                className="box-border content-stretch flex flex-row gap-6 items-center justify-start p-0 relative shrink-0"
                id="node-I9707_62295-3256_50292"
              >
                <div
                  className="font-['PingFang_SC:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap"
                  id="node-I9707_62295-3256_50293"
                >
                  <p className="block leading-[22px] whitespace-pre">验证码</p>
                </div>
                <div
                  className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
                  id="node-I9707_62295-3256_50294"
                >
                  <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                    <div className="[grid-area:1_/_1] h-10 ml-0 mt-0 relative rounded-lg w-[111px]">
                      <div className="overflow-clip relative size-full">
                        <div className="absolute font-['PingFang_SC:Regular',_sans-serif] leading-[0] left-3 not-italic text-[#999999] text-[14px] text-left text-nowrap top-[13px]">
                          <p className="block leading-[14px] whitespace-pre">请输入验证码</p>
                        </div>
                      </div>
                      <div className="absolute border border-[#d5d6d9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
                    </div>
                  </div>
                  <div className="box-border content-stretch flex flex-row h-10 items-center justify-center min-w-[76px] px-4 py-[7px] relative rounded shrink-0">
                    <div className="basis-0 font-['PingFang_SC:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#b0c4ff] text-[14px] text-left">
                      <p className="block leading-[14px]">按钮</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative shrink-0 w-full"
        data-name="Button Container"
        id="node-9707_62296"
      >
        <div className="flex flex-row items-center justify-end relative w-full h-full">
          <div className="box-border content-stretch flex flex-row gap-5 items-center justify-end pb-6 pt-4 px-6 relative w-full">
            <div
              className="box-border content-stretch flex flex-col h-9 items-center justify-center min-w-[76px] px-4 py-[5px] relative rounded shrink-0"
              data-name="Button 按钮"
              id="node-9707_62297"
            >
              <div className="absolute border border-[#d5d6d9] border-solid inset-0 pointer-events-none rounded" />
              <div className="font-['PingFang_SC:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#242529] text-[14px] text-left text-nowrap">
                <p className="block leading-[14px] whitespace-pre">按钮</p>
              </div>
            </div>
            <div
              className="bg-[#3855d5] box-border content-stretch flex flex-col h-9 items-center justify-center min-w-[76px] px-4 py-[5px] relative rounded shrink-0"
              data-name="Button 按钮"
              id="node-9707_62298"
            >
              <div className="font-['PingFang_SC:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
                <p className="block leading-[14px] whitespace-pre">按钮</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 