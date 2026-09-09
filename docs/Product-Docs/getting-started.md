# Getting Started Guide

Control-M Installation
You can install any Control-M component on a clean host or upgrade an existing installation to the latest major or fix pack version from the same installation file. There is no need to install a base version and then apply one or more fix pack. For more information, see Control-M Upgrade.

Added an image.

Modified for testing commit.  

You can use the version 9.0.22 installation files to install Control-M on a clean account or upgrade an existing installation of Control-M to 9.0.22.

To ensure that the Java library remains up to date, Control-M requires an external Java installation, as described in Control-M External Java Installation.

The following installation pages describe how to install one or more Control-M components on a clean host:

Control-M Full Installation: Describes how to install all Control-M components on UNIX or Windows in an interactive or automatic installation. You can apply the default settings or define the database server, database name, username, hostname, and port settings.

Control-M/Enterprise Manager Installation: Describes how to install one or more instances of Control-M/Enterprise Manager (Control-M/EM).

Control-M/Server Installation: Describes how to install one or more instances of Control-M/Server.

Agent Installation: Describes how to install one or more instances of Control-M/Agent on one or more hosts in your organization. Multiple Agents enable you to enhance performance with load balancing, as described in Host Groups.

modify for stating.
Change it for one file.
Adding to test update.

Control-M Client Installation: Describes how to install Control-M client on one or more hosts in your organization, which enables multiple users to simultaneously access and operate Control-M.

Let's make one more.

Control-M Installation on a Cloud Environment: Describes how to install Control-M components in a cloud environment.

High Availability Installation: Describes how to install a secondary instance of Control-M Full Installation, Control-M/EM, or Control-M/Server, which enables you to prevent downtime if a primary instance fails.

Control-M Cluster Configuration: Describes how to install Control-M in a cluster environment.

Planning Your InstallationLink copied to clipboard
There are two basic installation types, as follows:

Full Installation: Installs Control-M/EM and Control-M/Server on one (UNIX or Windows) account when you select the Full Install option. Full installations with dedicated PostgreSQL database servers build two databases on a single database server instance. This requires you to shut down both Control-M/EM and Control-M/Server when you backup or restore the database. For this reason, BMC recommends that you only perform full installations on test environments with limited resources.

Distributed Installation: Installs Control-M/EM and Control-M/Server on separate hosts or separate (UNIX or Windows) accounts. Distributed installations enable you to backup or restore a PostgreSQL database or perform maintenance on a host or OS kernel while keeping the other host up. For this reason, BMC recommends that you use this type of installation for a production environment.

Ensure that you install the latest GA Point Patches after you install or upgrade Control-M.

Language OptionsLink copied to clipboard
All database-level Control-M installations support CJK (Simplified Chinese, Traditional Chinese, Japanese, and Korean), as described in Language and Customization. CJK settings are only automatically inherited when you create a Control-M database on an existing Oracle database server. CJK settings are not inherited on PostgreSQL or MSSQL database servers.

Control-M Installation TerminologyLink copied to clipboard
The following table lists terms that are specific to Control-M.

Term

Description

Control-M/EM

Provides a central point of access and control for Control-M/Servers. Control-M/Enterprise Manager (Control-M/EM) also enables you to view, monitor, manage, and intervene in batch workflow processing across the entire enterprise.

(Windows only) Control-M/EM includes Control-M client.

Control-M Client

Provides the desktop application interface for your real-time batch environment and contains the following GUI applications:

Control-M Configuration Manager (CCM)

Control-M Desktop

Control-M/Server

Serves as the scheduling engine that schedules jobs on Agents and Agentless Hosts, manages job processing workflows, and updates Control-M/EM with job and workflow statuses.

Control-M/Agent

Executes jobs on behalf of the Control-M/Server that the Agent is connected to, tracks job processing, and sends job status updates to Control-M/Server.

Control-M Add-Ons

Enhance Control-M functionality, as described in Control-M Advanced Features and Add-Ons.

Trial Version (Full Installation)

Enables you to test Control-M/EM, Control-M/Server, and Control-M/Agent, with the following add-ons:

Control-M Workload Change Manager

Control-M Workload Archiving

Control-M Workflow Insights

This version is intended for testing and evaluation, not for usage in a production environment. For production usage in the future, you must uninstall the trial version and then install a non-trial version.

Non-Trial Version (Full Installation)

Consists of the following Control-M components:

Control-M/Enterprise Manager

Control-M/Server

Control-M/Agent
