import Footer from "@/components/Footer";

const PrivacyPolicyPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Privacy <span className="text-primary">Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg prose-slate dark:prose-invert">
            <div className="space-y-8">
              {/* Introduction */}
              <div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  We are committed to protecting your privacy. We always ensure that the personal information collected, gathered, received from website visitors, users, or customers is handled in a safe and responsible way.
                </p>
              </div>

              {/* Information Collection */}
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Information That We Collect</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We receive information when you contact us directly through our contact form, or when you create an account to place your orders with us. Or when you sign up to our mailing lists to know more about our offers, discounts, news, etc.
                  </p>
                  <p>
                    Our web servers will automatically log the IP/Internet address of all the users who visit our site, those who browse, use our site to place orders, etc. But, this information doesn't identify our web visitors or web users personally (as all the web visitors or our website users remain anonymous).
                  </p>
                  <p>
                    For the purpose of making our website more functional, and tracking its performance, we use certain cookies on our site. (check out more information on cookies under the section "cookies.").
                  </p>
                </div>
              </div>

              {/* How We Use Information */}
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">How do we use personal information?</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    The information that we collect through our website in any form, through contact form, registrations, or sign ups, is always used as per our ethical policy of fair usage.
                  </p>
                  <p>It is used solely for the purpose of:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Providing important information to our customers (about our new products or news, etc);</li>
                    <li>Dealing with requests, orders, enquiries;</li>
                    <li>Marketing our services and products (from time-to-time, we may send offers, discounts on menu items that we sell. For instance, our registered users or those who sign up to receive marketing emails from us regularly will receive offers or discounts on products that they often buy from or on new products that they can try for a change of taste. However, users who do not want to receive such offers can opt out our email lists. There will be an option to unsubscribe to our emails to stop receiving emails from us too).</li>
                  </ul>
                </div>
              </div>

              {/* Information Safety */}
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Information Safety</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We always keep your information safe. No third-party can have access to our information storage systems. We use highly advanced security solutions to keep the information safe.
                </p>
              </div>

              {/* About Disclosures */}
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">About Disclosures</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not share your information with anyone. That is our promise to you. However, when it comes to legal matters, when we have to abide by law, we disclose your personal information.
                </p>
              </div>

              {/* Marketing */}
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Marketing (When you sign up to receive emails from us)</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Our email marketing is also trackable. We use trackers to check how many people open our emails, click on email links to reach our website, response rate, conversion optimization, etc.
                  </p>
                  <p>
                    But, your email address, communications through emails are never passed on to any third-party or shared with anyone.
                  </p>
                  <p>
                    As described earlier, you can always opt out of our mailing lists, to stop receiving the emails from us. Or you can directly send an email with a subject line "Unsubscribe" to get your email address removed from our list of subscribers.
                  </p>
                </div>
              </div>

              {/* Cookies Policy */}
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Cookies Policy</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Use of cookies makes it easy for us to collect information about web visitors or users who visit or use our website. This helps us customize our website as per the needs of our web users (Please, learn more about cookies on www.allaboutcookies.org).
                  </p>
                  <p>
                    You will always have the options to control cookies (delete/accept cookies). You can easily control cookies via your web browser such as Chrome, Mozilla, Firefox, internet explorer, etc. You need to make some basic changes in the settings of your browser.
                  </p>
                  <p>
                    You can always block the cookies. But, it is recommended that you should not do this as blocking cookies may affect your browsing experience.
                  </p>
                  <div className="space-y-2">
                    <p><strong className="text-foreground">Functional Cookies</strong> - Necessary for our website to perform perfectly well (with no error).</p>
                    <p><strong className="text-foreground">Third-Party Cookies</strong> - We use Google Search Console, Google Analytics and other Website Tracking Tools that help us track our website performance in search engines, which pages are ranking, where visitors are from, demographics, time they spend on our site, etc. But, this information is again not personally identifiable.</p>
                  </div>
                </div>
              </div>

              {/* Your Rights */}
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Your Right</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You have the right to see what personal information we hold about you.
                </p>
              </div>

              {/* Changes to Policy */}
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Changes to our privacy policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Privacy policy at www.website.co.uk is reviewed, revamped from time-to-time. We may or may not place any notice about updates to our privacy policy on the site. So, you are requested to check this page regularly.
                </p>
              </div>

              {/* Last Updated */}
              <div className="pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  This privacy policy was last updated on <strong className="text-foreground">June 5, 2023</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
