// ==========================================================
// JSON API BRIDGE ДЛЯ ANDROID APK / PWA (добавьте в конец Code.gs)
// ==========================================================
function doPost(e) {
  try {
    var body = JSON.parse(e.postData.contents || "{}");
    var action = body.action;
    var args = body.args || [];
    var result;

    switch (action) {
      case "checkAdminPassword":
        result = { valid: checkAdminPassword(args[0]) };
        break;
      case "getBars":
        result = getBars(args[0]);
        break;
      case "adminCreateBar":
        result = adminCreateBar(args[0], args[1], args[2]);
        break;
      case "adminRenameBar":
        result = adminRenameBar(args[0], args[1], args[2], args[3]);
        break;
      case "adminDeleteBar":
        result = adminDeleteBar(args[0], args[1], args[2]);
        break;
      case "processForm":
        result = processForm(args[0]);
        break;
      case "getBarTasks":
        result = getBarTasks(args[0], args[1]);
        break;
      case "getStatisticsData":
        result = getStatisticsData(args[0]);
        break;
      case "takeTaskInWork":
        result = takeTaskInWork(args[0], args[1], args[2]);
        break;
      case "addTaskComment":
        result = addTaskComment(args[0], args[1], args[2], args[3]);
        break;
      case "addResultToTask":
        result = addResultToTask(args[0], args[1], args[2], args[3], args[4]);
        break;
      case "adminUpdateTask":
        result = adminUpdateTask(args[0], args[1], args[2], args[3]);
        break;
      case "adminDeleteTask":
        result = adminDeleteTask(args[0], args[1], args[2]);
        break;
      case "adminCloseTask":
        result = adminCloseTask(args[0], args[1], args[2], args[3]);
        break;
      case "getAdminTemplates":
        result = getAdminTemplates(args[0], args[1]);
        break;
      case "saveAdminTemplate":
        result = saveAdminTemplate(args[0], args[1], args[2]);
        break;
      case "deleteAdminTemplate":
        result = deleteAdminTemplate(args[0], args[1], args[2]);
        break;
      case "launchAdminTemplate":
        result = launchAdminTemplate(args[0], args[1], args[2]);
        break;
      case "getPhotoPreview":
        result = getPhotoPreview(args[0], args[1]);
        break;
      default:
        result = { success: false, error: "Неизвестное действие: " + action };
    }

    return ContentService
      .createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
