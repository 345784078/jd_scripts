#!/bin/sh
set -e

echo "整理各个日志文件里面的互助码相关信息。。。"
echo "==========================================================================="
logdDir="/scripts/logs"
sharecodeFile="${logdDir}/sharecode.log"
jdzzFile="${logdDir}/jd_jdzz.log"
jdfactoryFile="${logdDir}/jd_jdfactory.log"
jxFactoryFile="${logdDir}/jd_dreamFactory.log"
plantBean="${logdDir}/jd_plantBean.log"
jdfruit="${logdDir}/jd_fruit.log"
jdpet="${logdDir}/jd_pet.log"

echo -e >$sharecodeFile

sed -n '/京东赚赚好友互助码】.*/'p $jdzzFile | awk '{print $1}' | sort | uniq >>$sharecodeFile
echo "提取京东赚赚助力码完成"

sed -n '/东东工厂好友互助码】.*/'p $jdfactoryFile | awk '{print $1}' | sort | uniq >>$sharecodeFile
echo "提取东东工厂助力码完成"

sed -n '/京喜工厂好友互助码.*/'p $jxFactoryFile | awk '{print $1}' | sort | uniq >>$sharecodeFile
echo "提取京喜工厂助力码完成"

sed -n '/京东种豆得豆好友互助码】.*/'p $plantBean | awk '{print $1}' | sort | uniq >>$sharecodeFile
echo "提取京东种豆助力码完成"

sed -n '/东东农场好友互助码】.*/'p $jdfruit | awk '{print $1}' | sort | uniq >>$sharecodeFile
echo "提取京东农场助力码完成"

sed -n '/东东萌宠好友互助码】.*/'p $jdpet | awk '{print $1}' | sort | uniq >>$sharecodeFile
echo "提取东东萌宠助力码完成"

echo "==========================================================================="
echo "整理完成，具体结果请查看${sharecodeFile}文件"
