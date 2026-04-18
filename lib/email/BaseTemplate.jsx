
export function createBaseEmailTemplate({
  title,
  preheader,
  intro,
  sectionTitle,
  sectionContent,
  bodyContent,
  ctaText,
  ctaUrl,
  footerNote,
}) {
  return `
  <div style="margin:0;padding:0;background-color:#fefce8;">
    ${
      preheader
        ? `<div style="display:none;max-height:0;overflow:hidden;opacity:0;mso-hide:all;">
            ${preheader}
          </div>`
        : ""
    }

    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#fefce8;padding:20px 0;">
      <tr>
        <td align="center">

          <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;font-family:Arial,sans-serif;">

            <tr>
              <td style="background:#78350f;padding:20px 30px;">
                <table width="100%">
                  <tr>
                    <td align="left" style="color:#fef3c7;font-size:22px;font-weight:bold;">
                      <img src="https://yungolatransport.com/logo.png" width="40" height="40" alt="Yungola Transport" style="vertical-align:middle;border-radius:6px;margin-right:8px;" />
                      Yungola <span style="color:#ffffff;font-weight:600;">Transport</span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="height:5px;background:#f59e0b;"></td>
            </tr>

            <tr>
              <td style="padding:30px;color:#1f2937;">

                <h2 style="margin-top:0;color:#78350f;">${title}</h2>

                ${
                  intro
                    ? `<p style="font-size:15px;color:#4b5563;line-height:1.7;">${intro}</p>`
                    : ""
                }

                ${
                  sectionTitle || sectionContent
                    ? `
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:20px;border:1px solid #fcd34d;border-radius:8px;">
                      ${
                        sectionTitle
                          ? `
                          <tr>
                            <td style="padding:12px 15px;background:#fffbeb;font-weight:bold;color:#92400e;">
                              ${sectionTitle}
                            </td>
                          </tr>
                        `
                          : ""
                      }
                      ${
                        sectionContent
                          ? `
                          <tr>
                            <td style="padding:15px;">
                              ${sectionContent}
                            </td>
                          </tr>
                        `
                          : ""
                      }
                    </table>
                  `
                    : ""
                }

                ${
                  bodyContent
                    ? `
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:20px;">
                      <tr>
                        <td>${bodyContent}</td>
                      </tr>
                    </table>
                  `
                    : ""
                }

                ${
                  ctaText && ctaUrl
                    ? `
                    <div style="margin-top:30px;text-align:center;">
                      <a href="${ctaUrl}" 
                         style="display:inline-block;background:#f59e0b;color:#ffffff;text-decoration:none;padding:12px 24px;border-radius:6px;font-weight:bold;">
                        ${ctaText}
                      </a>
                    </div>
                  `
                    : ""
                }

                ${
                  footerNote
                    ? `
                    <p style="margin-top:30px;font-size:14px;color:#6b7280;line-height:1.6;">
                      ${footerNote}
                    </p>
                  `
                    : ""
                }

              </td>
            </tr>

            <tr>
              <td style="background:#78350f;padding:20px;text-align:center;color:#fef3c7;font-size:13px;">
                © ${new Date().getFullYear()} Yungola Transport<br/>
                Reliable Transport & Vehicle Services
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>
  </div>
  `;
}