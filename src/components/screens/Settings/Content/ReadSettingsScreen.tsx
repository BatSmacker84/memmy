import React from "react";
import { useTheme, VStack } from "native-base";
import { Switch } from "react-native";
import { useTranslation } from "react-i18next";
import CTable from "../../../common/Table/CTable";
import CSection from "../../../common/Table/CSection";
import CCell from "../../../common/Table/CCell";
import { useAppDispatch, useAppSelector } from "../../../../../store";
import { selectSettings } from "../../../../slices/settings/settingsSlice";
import { setSetting } from "../../../../slices/settings/settingsActions";

function ReadSettingsScreen() {
  const { t } = useTranslation();
  const theme = useTheme();

  const settings = useAppSelector(selectSettings);

  const dispatch = useAppDispatch();

  const onChange = (key: string, value: any) => {
    dispatch(setSetting({ [key]: value }));
  };

  return (
    <VStack backgroundColor={theme.colors.app.bg}>
      <CTable>
        <CSection footer={t("settings.content.markRead.footer")}>
          <CCell
            cellStyle="RightDetail"
            title={t("Hide Read Posts on Feed")}
            backgroundColor={theme.colors.app.fg}
            titleTextColor={theme.colors.app.textPrimary}
            rightDetailColor={theme.colors.app.textSecondary}
            cellAccessoryView={
              <Switch
                value={settings.hideReadPostsOnFeed}
                onValueChange={(v) => {
                  onChange("hideReadPostsOnFeed", v);
                }}
              />
            }
          />
          <CCell
            cellStyle="RightDetail"
            title={`${t("Hide Read Posts in Communities")}`}
            backgroundColor={theme.colors.app.fg}
            titleTextColor={theme.colors.app.textPrimary}
            rightDetailColor={theme.colors.app.textSecondary}
            cellAccessoryView={
              <Switch
                value={settings.hideReadPostsInCommunities}
                onValueChange={(v) => onChange("hideReadPostsInCommunities", v)}
              />
            }
          />
          <CCell
            cellStyle="RightDetail"
            title={t("Show Hide Read Button")}
            backgroundColor={theme.colors.app.fg}
            titleTextColor={theme.colors.app.textPrimary}
            rightDetailColor={theme.colors.app.textSecondary}
            cellAccessoryView={
              <Switch
                value={settings.showHideReadButton}
                onValueChange={(v) => {
                  onChange("showHideReadButton", v);
                }}
              />
            }
          />
        </CSection>

        <CSection header={t("settings.content.markRead.header")}>
          <CCell
            cellStyle="RightDetail"
            title={t("settings.content.markRead.onPostOpen")}
            backgroundColor={theme.colors.app.fg}
            titleTextColor={theme.colors.app.textPrimary}
            rightDetailColor={theme.colors.app.textSecondary}
            cellAccessoryView={
              <Switch
                value={settings.markReadOnPostView}
                onValueChange={(v) => onChange("markReadOnPostView", v)}
              />
            }
          />
          <CCell
            cellStyle="RightDetail"
            title={t("settings.content.markRead.onImageView")}
            backgroundColor={theme.colors.app.fg}
            titleTextColor={theme.colors.app.textPrimary}
            rightDetailColor={theme.colors.app.textSecondary}
            cellAccessoryView={
              <Switch
                value={settings.markReadOnPostImageView}
                onValueChange={(v) => onChange("markReadOnPostImageView", v)}
              />
            }
          />
          <CCell
            cellStyle="RightDetail"
            title={`${t("settings.content.markRead.onVote")} ↑↓`}
            backgroundColor={theme.colors.app.fg}
            titleTextColor={theme.colors.app.textPrimary}
            rightDetailColor={theme.colors.app.textSecondary}
            cellAccessoryView={
              <Switch
                value={settings.markReadOnPostVote}
                onValueChange={(v) => onChange("markReadOnPostVote", v)}
              />
            }
          />
        </CSection>
      </CTable>
    </VStack>
  );
}

export default ReadSettingsScreen;
